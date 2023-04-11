<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    public function redirectWithGoogle()
    {
        $redirect = Socialite::driver('google')->redirect();
        return $redirect;
    }

    public function callbackWithGoogle()
    {
        $user = Socialite::driver('google')->user();

        $finduser = User::where('google_id', $user->id)->first();

        if (!$finduser) {
            //     Auth::login($finduser);
            // } else {
            $user = User::create([
                'name' => $user->name,
                'email' => $user->email,
                'google_id' => $user->id,
                'password' => uniqid(), // you can change auto generate password here and send it via email but you need to add checking that the user need to change the password for security reasons
            ]);

            $finduser = User::find($user->id);

            Auth::login($user);
        }

        // Jika berhasil login
        if($finduser){
//            $user = User::query()->where('email', $user->email)->get();
//            $token = $user->createToken('Access Token')->accessToken;
//            $user->query()->update(['remember_token' => $token]);

            $user = auth()->user();
            $token = $user->createToken('token-name')->plainTextToken;
//            $token = $user->createToken('email')->plainTextToken;

            User::query()->where('email', $user->email)->update(['remember_token' => $token]);

            $user_res = new UserResource($user);

            $user_enc = json_encode($user_res);

            return redirect(env('APP_FE_URL') . '/login/redirect?auth_token=' . $token . '&user=' . $user_enc);
        }
    }
}
