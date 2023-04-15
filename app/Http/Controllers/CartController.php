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

            return redirect(env('APP_FE_URL'))-> response()->json(['success' => 'Successfully Added on Your Cart' ]);

        }

    }

    public function cartRemove($rows_id){
        Cart::query()->where('id' , $rows_id)->delete();
        return response()->json(['success' => 'Successfully Remove From Cart']);
    }

    public function cartIncrement($rows_id){
        $cart = Cart::query()->where('id' , $rows_id);
        $cart->update([
           'quantity' => $cart->quantity +1
        ]);
        return response()->json('Increment');
    }

    public function cartDecrement($rows_id){
        $cart = Cart::query()->where('id' , $rows_id);
        $cart->update([
            'quantity' => $cart->quantity -1
        ]);
        return response()->json('Increment');
    }

    public function cartInformation($user_id)
    {

        $cartQty = Cart::query()->select('quantity')->where('user_id' , $user_id)->get();
        $cartQtyCount = $cartQty->count();
        $cartQtyJson = response()->json($cartQtyCount);

        $cartTotal  = CartResource::collection(
            Cart::query()->where('user_id' ,$user_id)->get()
        );
        $cartTotalJson = response()->json($cartTotal);

        return ["total" => $cartTotalJson, "quantity" => $cartQtyJson];
//
//        $carts = Cart::content();
//        $cartQty = Cart::count();
//
//        return response()->json(array(
//            'carts' => $carts,
//            'cartQty' => $cartQty,
//            'cartTotal' => $cartTotal
//
//        ));
    }
}
