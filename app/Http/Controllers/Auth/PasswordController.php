<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    public function savePassword(Request $request , $email){

        $password = $request->query('password');
        $realPassword = $request->query('rp');

//        $hashPw = Hash::make($realPassword);
//        $checkHash = Hash::check($realPassword, $hashPw);

        $user = User::query()->where('email' , $email)->first();

        if (is_null($password)){
            $error = "Please fill the password";
            return redirect(env('APP_FE_URL') . '/auth/add/password?error=' . $error);
        } else{
            $user->update([
                'password' => $request->query('password'),
                'passwords' => $request->query('password'),
            ]);

            $token = $user->createToken('token-name')->plainTextToken;

            User::query()->where('email', $user->email)->update(['remember_token' => $token]);

            $user_res = new UserResource($user);

            $user_enc = json_encode($user_res);

            return redirect(env('APP_FE_URL') . '/?auth_token=' . $token . '&user=' . $user_enc);
        }

    }

}
