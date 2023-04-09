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
            $table->string('title')->nullable();
            $table->string('contents')->nullable();
            $table->string('track_list')->nullable();
            $table->string('product_material')->nullable();
            $table->string('product_component')->nullable();
            $table->string('size')->nullable();
            $table->string('instructions')->nullable();
            $table->string('manufacturer')->nullable();
            $table->string('country_of_manufacturer')->nullable();
            $table->string('mail_order_business')->nullable();
            $table->string('period_of_use')->nullable();
            $table->string('how_to_offer_your_goods')->nullable();
            $table->string('minimum_system_specifications')->nullable();
            $table->string('quality_assurance_standards')->nullable();
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
