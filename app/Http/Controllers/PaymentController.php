<?php

namespace App\Http\Controllers;

use App\Http\Resources\PaymentResource;
use App\Models\AgreementsPayments;
use App\Models\NoticesPayments;
use App\Models\Payments;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function all(){
//
        $payment = PaymentResource::collection(
            Payments::all()
        );

//        $payment = NoticesPayments::all();
        return response()->json($payment);
    }
}
