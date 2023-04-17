<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Products;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Type\Time;

class CartController extends Controller
{
    public function cart($user_id){

        $cart  = CartResource::collection(
            Cart::query()->where('user_id' ,'=' ,intval($user_id))->get()
        );

        return response()->json($cart);
    }

    public function addToCart(Request $request , $product_id ,$user_id ){

        $cart_exists = DB::table('carts')->where('user_id' , $user_id)->where('product_id' , $product_id)->exists();
//        dd($cart_exists);

        if ($cart_exists){
            $error = "Product already in cart";
             return back();
        }else{
            DB::table('carts')->insert([
                'user_id' => $user_id,
                'product_id' => $product_id,
                'quantity' => 1,
                'created_at' => Carbon::now(),
            ]);

            $message = "You successfully add product on your cart";

            return back();
        }

    }

    public function cartRemove($rows_id){
        Cart::query()->where('id' , $rows_id)->delete();
        return redirect(env('APP_FE_URL') . '/cart');
    }

    public function cartIncrement($rows_id){
        $cart = Cart::query()->where('id' , $rows_id)->get();
        Cart::query()->where('id' , $rows_id )->update([
           'quantity' => $cart[0]->quantity +1
        ]);

        return redirect(env('APP_FE_URL') . '/cart');
    }

    public function cartDecrement($rows_id){
        $cart = Cart::query()->where('id' , $rows_id)->get();
        Cart::query()->where('id' , $rows_id )->update([
            'quantity' => $cart[0]->quantity - 1
        ]);
        return redirect(env('APP_FE_URL') . '/cart');

    }

    public function cartTotalItem($user_id)
    {

        $cartQty = Cart::query()->select('quantity')->where('user_id' , $user_id)->get();
        $cartQtyCount = $cartQty->count();
        return response()->json($cartQtyCount);

    }

    public function cartTotalPrice($user_id){

        $cartItems = Cart::query()->where('user_id' , $user_id)->get();

        $totalPrice = 0;
        foreach ($cartItems as $item){
            $product = Products::query()->find($item->product_id);
            $totalPrice += $product->price * $item->quantity;
        }

        $formatted_total = number_format($totalPrice, 2, '.', '');


        return response()->json($formatted_total);

    }

}