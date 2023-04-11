<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    public function logout (){

        $token = auth('sanctum')->user()->getRememberToken()->delete();
        $user = "undefined";

        auth()->guard('web')->logout();

        return redirect(env('APP_FE_URL') . '/?auth_token=' . $token . '&user=' . $user);

    }
}
