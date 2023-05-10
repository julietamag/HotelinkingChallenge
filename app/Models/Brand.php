<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Coupon;

class Brand extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'discountPercentage'
    ];

    public function coupon()
    {
        return $this->hasMany(Coupon::class);
    }
}
