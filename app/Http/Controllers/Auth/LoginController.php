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
    public function redirect(){
        $redirect = Socialite::driver('google')->redirect();
        return $redirect;
    }

    public function callback(){
        try {
            $user = Socialite::driver('google')->user();
            $finduser = User::where('google_id', $user->id)->first();

            if (!$finduser) {
                $user = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'google_id' => $user->id,
                    'password' => uniqid()
                ]);

                $finduser = User::find($user->id);

                Auth::login($user);
            }

            if ($finduser){
                $token = $user->createToken('auth_token')->plainTextToken;
                User::query()->where('email' , $user->email)->update(['remember_token' => $token]);
                $user_res = new UserResource($user);
                $user_enc = json_encode($user_res);
                return redirect(env('APP_FE_URL') . '/login/redirect?auth_token=' . $token . '&user=' . $user_enc);
            }
        }
        catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
