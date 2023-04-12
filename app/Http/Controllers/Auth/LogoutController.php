<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    public function logout (){

        $user = Auth::user();
        User::query()->where('id' ,'=' , $user->id)->update([
            'remember_token' => null,
        ]);

        $token = User::query()->where('id', $user->id)->value('remember_token');
//        $tokenStr = $token->toString();
        $tokenStr = $token === null ? 'null' : null;

            $login = "false";

            return redirect(env('APP_FE_URL') . '/logout?auth_token=' . $tokenStr . '&isLogin=' . $login  . '&whoLogin=' . $tokenStr);


    }
}
