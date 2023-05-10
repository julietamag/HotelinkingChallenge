<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;

class BrandController extends Controller
{
    public function getBrands()
    {
        $brands = Brand::all();

        return response()->json(['brands' => $brands]);
    }
}
