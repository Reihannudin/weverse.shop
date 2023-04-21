<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Http\Resources\OrderResource;
use App\Http\Resources\PaymentResource;
use App\Models\Address;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Payments;
use App\Models\Products;
use App\Models\Shipping;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function totalBonus ($user_id){
        $cart = Cart::query()->where('user_id' , $user_id)->get();

        $totalBonus = 0;

        foreach ($cart as $item){
            $product = Products::query()->find($item->product_id);
            $totalBonus += $product->bonus * $item->quantity;

        }

        $formatted_total = number_format($totalBonus, 2, '.', '');

        return response()->json($formatted_total);
    }

    public function orderShow( $user_id, $order_id ){
        $order = OrderResource::collection(
            Order::query()->where('customer_id' , $user_id)->where('id' ,  $order_id)->get()
        );
        return response()->json($order);
    }

    public function order($user_id){
        $order = OrderResource::collection(
            Order::query()->where('customer_id' , $user_id)->get()
        );
        return response()->json($order);
    }

    public function postOrder(Request $request, $user_id)
    {
        $address = $request->query('addressId');
        $shipping = $request->query('shippingId');
        $payment = $request->query('paymentId');
        $total = $request->query('total');

        $status = 0;
        $customer = User::query()->where('id', $user_id)->get();
        $cart = Cart::query()->where('user_id', $user_id)->get();

        $order = Order::query()->create([
            'customer_id' => $customer[0]->id,
            'address_id' => $address,
            'shipping_id' => $shipping,
            'payment_id' => $payment,
            'status' => $status,
            'grand_total' => $total,
        ]);

        $response = [];

        foreach ($cart as $item) {
            DB::table('pivot_orders_id_product_id')->insert([
                'order_id' => $order->id,
                'product_id' => $item->product_id,
            ]);

            DB::table('pivot_order_id_cart_id')->insert([
                'order_id' => $order->id,
                'cart_id' => $item->id
            ]);

            $response[] = $item;
        }

        $pvt_order_cart = DB::table('pivot_order_id_cart_id')->where('order_id' , $order->id )->get();
        $pvt_order_prod = DB::table('pivot_orders_id_product_id')->where('order_id' , $order->id)->get();

        Order::query()->where('id' , $order->id)->update([
           'pivot_ord_pro_id' => $pvt_order_prod[0]->order_id,
            'pivot_ord_car_id' => $pvt_order_cart[0]->order_id,
        ]);


        return response()->json($response);
    }

    public function payment(){
        $payment = PaymentResource::collection(
            Payments::all()
        );

        return response()->json($payment);
    }

    public function paymentShow($paymemt_id){
        $payment = PaymentResource::collection(
            Payments::query()->where('id' , $paymemt_id)->get()
        );

        return response()->json($payment);
    }


    public function shipping(){
        $shipping = Shipping::all();

        return response()->json($shipping);
    }

}
