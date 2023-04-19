<?php

namespace App\Http\Controllers;

use App\Http\Resources\PaymentResource;
use App\Models\Payments;
use App\Models\Shipping;
use Illuminate\Http\Request;

class OrderController extends Controller
{

    public function payment(){
        $payment = PaymentResource::collection(
            Payments::all()
        );

        return response()->json($payment);
    }

    public function shipping(){
        $shipping = Shipping::all();

        return response()->json($shipping);
    }

}
