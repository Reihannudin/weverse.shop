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

    public function paymentOrder(){

        $payment = DB::table('payments_orders')->get();
        return response()->json($payment);
    }

    public function order($user_id){
        $order = OrderResource::collection(
            Order::query()->where('customer_id' , $user_id)->get()
        );
        return response()->json($order);
    }

    public function postOrder( Request $request, $user_id  ){

        $address  = $request->query('addressId');
        $shipping  = $request->query('shippingId');
        $payment  = $request->query('paymentId');
        $total = $request->query('total');

        //        /{user_id}/order/checkout
        $status = 0;
        $customer = User::query()->where('id' , $user_id)->get();
        $cart = Cart::query()->where('user_id' , $user_id)->get();

        Order::query()->create([
//            'cart_id' => $cart->id,
            'customer_id' => $customer[0]->id,
            'address_id' => $address,
            'shipping_id' => $shipping,
            'payment_id' => $payment,
            'status' => $status,
            'grand_total' => $total,
        ]);

        $order = Order::query()->where('customer_id' , $user_id)->get();

        foreach ($cart as $items){

            $pivot_order = DB::table('pivot_orders_id_product_id')->insert([
                'order_id' => $order[0]->id,
                'product_id' =>  $items->product_id,
            ]);
            return response()->json('order test api');
        }

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
