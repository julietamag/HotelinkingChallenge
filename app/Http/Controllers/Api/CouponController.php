<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Coupon;
use App\Models\Brand;
use App\Http\Requests\SaveCouponRequest;

class CouponController extends Controller
{
    private function generateCouponCode()
    {
        // Generate a random coupon code
        return substr(md5(uniqid()), 0, 8);
    }

    public function saveCoupon($userId, $brandId)
    {
        // Generate a unique coupon code
        $couponCode = $this->generateCouponCode();

        // Create the coupon record
        $coupon = new Coupon;
        $coupon->code = $couponCode;
        $coupon->brand_id = $brandId;
        $coupon->user_id = $userId;
        $coupon->isUsable = true;
        $coupon->save();

        return response()->json(['message' => 'Coupon saved successfully.']);
    }


    public function getCoupons()
    {
        $coupons = Coupon::where('isUsable', true)->get();

        return response()->json(['coupons' => $coupons]);
    }


    public function getAllUserCoupons($userId)
    {
        $coupons = Coupon::with('brand')->where('user_id', $userId)->get();

        return response()->json(['coupons' => $coupons]);
    }

    public function redeemCoupon($couponId)
    {
        // Retrieve the coupon by ID
        $coupon = Coupon::find($couponId);

        if (!$coupon) {
            return response()->json(['message' => 'Coupon not found.'], 404);
        }

        // Mark the coupon as used
        $coupon->markAsUsed();

        return response()->json(['message' => 'Coupon marked as used.']);
    }





}