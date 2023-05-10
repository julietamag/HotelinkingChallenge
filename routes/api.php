<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CouponController;
use App\Http\Controllers\Api\BrandController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });


    Route::post('/users/{userId}/save-coupon/{brandId}', [CouponController::class, 'saveCoupon']);
    Route::get('/coupons', [CouponController::class, 'getCoupons']);
    Route::get('/brands', [BrandController::class, 'getBrands']);
    Route::get('/coupons/saved/{userId}', [CouponController::class, 'getAllUserCoupons']);
    Route::put('/coupon/redeem/{couponId}', [CouponController::class, 'redeemCoupon']);

});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/seed-coupons', [CouponController::class, 'seedCoupons']);