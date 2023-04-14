<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class SignUpController extends Controller
{
    public function signUpForm(Request $request){

        $email = $request->query('email');

        $already_register = User::query()->where('email' , '=' , $email)->first();

        if ($already_register){
            $error = "Email already registered";
            return redirect(env('APP_FE_URL') . '/signup?error=' . $error);
        } else{
            User::query()->create([
               'email' => $email
            ]);
            return redirect(env('APP_FE_URL') . '/signup/add/password?email=' . $email);
        }
    }

    public function addInformation(Request $request , $email){
        $name = $request->query('name');
        $contact = $request->query('contact');

        $userEmail = User::query()->where('email' , $email)->first();
//        dd($userEmail);

        if (!$userEmail){
            $error = "Email not same";
            return redirect(env('APP_FE_URL') . '/signup?error=' . $error);
        } else{
            $userEmail->update([
                'name' => $name,
                'phone_number' => $contact

            ]);
            return redirect(env('APP_FE_URL') . '/login');
        }
    }

}

//`http://127.0.0.1:8000/signup/form?
