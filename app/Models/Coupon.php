<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'isUsable',
    ];


    /**
     * Generate a unique code for the coupon.
     */
    public static function generateCode()
    {
        $code = '';
        do {
            // Generate a random code of length 8
            $code = substr(str_shuffle("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 8);
        } while (Coupon::where('code', $code)->exists());

        return $code;
    }

    /**
     * Set the coupon as used.
     */
    public function markAsUsed()
    {
        $this->isUsable = false;
        $this->save();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
}