<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\SignUpController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/* Google Social Login */
    Route::get('/login/form', [LoginController::class, 'login'])->name('login.form'); ///login/form?email={email}&password={password}
    Route::get('/login/p', [LoginController::class, 'redirectWithGoogle'])->name('login.google-redirect');
    Route::get('/login/callback', [LoginController::class, 'callbackWithGoogle'])->name('login.google-callback');

    Route::get('/signup/form', [SignUpController::class , 'signUpForm'])->name('signup.form');
    Route::get('/signup/add/password/{email}', [PasswordController::class , 'saveSignPassword'])->name('signup.form');
    Route::get('/signup/add/information/{email}', [SignUpController::class , 'addInformation'])->name('signup.form');

    Route::get('/auth/add/password/{email}' , [PasswordController::class , 'savePassword'])->name('auth.add.password');
//)})

Route::get('/login/p/{provider}', function ($provider) {
    return Socialite::driver('goggle')->redirect();
});

Route::get('/logout' , [LogoutController::class, 'logout']);



