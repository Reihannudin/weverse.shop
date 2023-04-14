<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{

//    Login with google
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
            $user = User::create([
                'name' => $user->name,
                'email' => $user->email,
                'google_id' => $user->id,
                'google_password' => uniqid(), // you can change auto generate password here and send it via email but you need to add checking that the user need to change the password for security reasons
            ]);

            $finduser = User::find($user->id);

            Auth::login($user);

        }

        // Jika berhasil login
        if($finduser){
            $user = auth()->user();
//            dd($user->password);
            if (is_null($user->passwords)){

                $user_res = new UserResource($user);

                $user_enc = json_encode($user_res);

                return redirect(env('APP_FE_URL') . '/auth/add/password/'  . '?email=' . $user->email);
            } else{
                $token = $user->createToken('token-name')->plainTextToken;

                User::query()->where('email', $user->email)->update(['remember_token' => $token]);

                $user_res = new UserResource($user);

                $user_enc = json_encode($user_res);

                return redirect(env('APP_FE_URL') . '/login/redirect?auth_token=' . $token . '&user=' . $user_enc);
            }
        }
    }

    public function login(Request $request){

        $email = $request->query('email');
        $password = $request->query('password');
        $realPassword = $request->query('rp');

        $user = User::query()->where('email' , $email)->first();


        if (Hash::check($realPassword, $password) && Hash::check($realPassword,$user->passwords)) {
            $token = $user->createToken('API Token of ' . $user->email)->plainTextToken;
            User::query()->where('email' , '=' , $user->email )->update(['remember_token' => $token]);
            $user_res = new UserResource($user);
            $user_enc = json_encode($user_res);
            return redirect(env('APP_FE_URL') . '/login/redirect?auth_token=' . $token . '&user=' . $user_enc);

//            return redirect(env('APP_FE_URL') . '/?auth_token=' . $token . '&user=' . $user);
        } else {
            $error = "password incorrect";
            return redirect(env('APP_FE_URL') . '/login?error=' . $error);
        }
    }

}
