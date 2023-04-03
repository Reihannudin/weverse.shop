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
        Schema::create('informations', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->string('label');
            $table->string('release_date');
            $table->string('title');
            $table->string('contents');
            $table->string('tracklist');
            $table->string('manufacturer');
            $table->string('country_of_manufacturer');
            $table->string('period_of_use');
            $table->string('how_to_offer_your_goods');
            $table->string('minimum_system_specifications');
            $table->string('quality_assurance_standards');
            $table->string('customer_service');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('informations');
    }
};
