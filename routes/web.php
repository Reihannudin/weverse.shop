<?php

use App\Http\Controllers\Auth\LoginController;
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
//Route::domain(env('AUTH_DOMAIN'))->group(function () {
    Route::get('/login/google', [LoginController::class, 'redirect'])->name('login.google-redirect');
    Route::get('/login/google/callback', [LoginController::class, 'callback'])->name('login.google-callback');
//)})

Route::get('/login/{provider}', function ($provider) {
    return Socialite::driver('goggle')->redirect();
});
