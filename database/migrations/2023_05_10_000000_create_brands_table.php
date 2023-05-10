<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('brands', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('discountPercentage')->nullable();
            $table->timestamps();
        });

        // Seed the table with some sample data
        $brands = ['Nike', 'Adidas', 'Gucci', 'Versace', 'Levi\'s', 'H&M', 'Zara', 'Tommy Hilfiger', 'Calvin Klein', 'Ralph Lauren', 'Lacoste', 'Armani', 'Hugo Boss', 'Puma', 'Reebok', 'Vans', 'Converse', 'New Balance', 'Fila', 'Diesel', 'Prada', 'Burberry', 'Balenciaga', 'Chanel', 'Yves Saint Laurent', 'Dior', 'Givenchy', 'Alexander McQueen', 'Stella McCartney', 'Victoria Beckham', 'Bvlgari', 'Fendi', 'Hermès', 'Louis Vuitton', 'Chloé', 'Christian Louboutin', 'Jimmy Choo', 'Michael Kors', 'Tory Burch', 'Coach', 'Kate Spade', 'Moschino', 'Kenzo', 'Off-White', 'Supreme', 'Gosha Rubchinskiy', 'Palace Skateboards', 'Stüssy', 'A Bathing Ape'];
        foreach ($brands as $brand) {
            DB::table('brands')->insert([
                'name' => $brand,
                'discountPercentage' => rand(5, 65),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    public function down()
    {
        Schema::dropIfExists('brands');
    }

};