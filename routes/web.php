<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
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
    Route::get('/login', [LoginController::class, 'redirectWithGoogle'])->name('login.google-redirect');
    Route::get('/login/callback', [LoginController::class, 'callbackWithGoogle'])->name('login.google-callback');
//)})

Route::get('/login/{provider}', function ($provider) {
    return Socialite::driver('goggle')->redirect();
});

Route::get('/logout' , [LogoutController::class, 'logout']);



