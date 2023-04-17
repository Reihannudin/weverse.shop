<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function address($user_id){
        $address = Address::query()->where('user_id' , $user_id)->get();
//        dd($address);
        return response()->json($address);
    }

    public function addAddress(Request $request, $user_id){
        $name = $request->query('name');
        $lastname = $request->query('lastname');
        $country = $request->query('indonesia');
        $street= $request->query('street');
        $city = $request->query('city');
        $state = $request->query('state');
        $post_code = $request->query('post_code');
        $phone_number = $request->query('phone_number');

        Address::created([
            'receiver' => $name + $lastname,
            'phone_number' => $phone_number,
            'isDefault' => 0,
            'street' =>  $street,
            'city' => $city,
            'state' => $state,
            'user_id' => $user_id,
            'post_code' => $post_code,
            'country' => $country,
            'created_at' => Carbon::now()
        ]);

        return response()->json('You successfully add new address');

    }

    public function editAddress(Request $request , $rows_id){

        $name = $request->query('name');
        $lastname = $request->query('lastname');
        $country = $request->query('indonesia');
        $street= $request->query('street');
        $city = $request->query('city');
        $state = $request->query('state');
        $post_code = $request->query('post_code');
        $phone_number = $request->query('phone_number');

        Address::query()->where('id' , $rows_id)->update([
            'receiver' => $name + $lastname,
            'phone_number' => $phone_number,
            'isDefault' => 0,
            'street' =>  $street,
            'city' => $city,
            'state' => $state,
            'post_code' => $post_code,
            'country' => $country,
            'updated_at' => Carbon::now()
        ]);

        return response()->json('Successfully edit you address');

    }

    public function removeAddress($rows_id){
        Address::query()->where('id' , $rows_id)->delete();
        return response()->json(['success' => 'Successfully Remove From Cart']);

    }
}