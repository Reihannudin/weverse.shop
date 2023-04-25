<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('status_shipping', function (Blueprint $table) {
            $table->id();
            $table->integer('order_made');
            $table->integer('payment');
            $table->integer('shipping');
            $table->integer('order_arrived');
            $table->integer('review');
            $table->integer('return');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('status_shipping');
    }
};