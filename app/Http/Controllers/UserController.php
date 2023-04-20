<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function customer($user_id){
        $user = User::query()->where('id' , $user_id)->get();
        return response()->json($user);
    }

    public function address($user_id){
        $address = Address::query()->where('user_id' , $user_id)->get();
//        dd($address);
        return response()->json($address);
    }

    public function addAddress(Request $request, $user_id){
        $name = $request->query('name');
        $lastname = $request->query('lastname');
        $country = $request->query('country');
        $street= $request->query('address');
        $city = $request->query('city');
        $state = $request->query('state');
        $post_code = $request->query('postal');
        $contact = $request->query('contact');

        Address::query()->create([
            'receiver' => $name ,
            'lastname' => $lastname,
            'phone_number' => $contact,
            'isDefault' => 0,
            'street' =>  $street,
            'city' => $city,
            'state' => $state,
            'country' => $country,
            'user_id' => $user_id,
            'postcode' => $post_code,
            'created_at' => Carbon::now()
        ]);

        return redirect(env('APP_FE_URL') . '/my/addresses');

    }

    public function defaultAddress($user_id , $rows_id){

        $address = Address::query()->where( 'id' , $rows_id)->where('user_id' , $user_id)->get();

        return response()->json($address);
    }

    public function setDefaultAddress( $user_id, $rows_id){

        Address::query()->where( 'id'  , '!=', $rows_id)->where('user_id'  , '=', $user_id)->update([
            'isDefault' => 0,
        ]);

        Address::query()->where( 'id' , $rows_id)->where('user_id' , $user_id)->update([
            'isDefault' => 1,
        ]);

        return redirect(env('APP_FE_URL') . '/order/checkout/?addressid=' . $rows_id);

    }

    public function editAddress($rows_id){

        $address = Address::query()->where('id' , $rows_id)->get();
        return response()->json($address);
//          return response()->json('Successfully edit you address');

    }

    public function editPostAddress(Request $request , $rows_id){

        $name = $request->query('name');
        $lastname = $request->query('lastname');
        $country = $request->query('country');
        $street= $request->query('address');
        $city = $request->query('city');
        $state = $request->query('state');
        $post_code = $request->query('postal');
        $contact = $request->query('contact');

//        $address = Address::query()->where('id' , $rows_id)->get();

        Address::query()->where('id' , $rows_id)->update([
            'receiver' => $name ,
            'lastname' => $lastname,
            'phone_number' => $contact,
            'isDefault' => 0,
            'street' =>  $street,
            'city' => $city,
            'state' => $state,
            'postcode' => $post_code,
            'country' => $country,
            'updated_at' => Carbon::now()
        ]);

        return redirect(env('APP_FE_URL') . '/my/addresses');
//        return response()->json('Successfully edit you address');

    }

    public function removeAddress($rows_id){
        Address::query()->where('id' , $rows_id)->delete();
        return redirect(env('APP_FE_URL') . '/my/addresses');
    }
}
