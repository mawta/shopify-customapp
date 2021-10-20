<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePriceRulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('price_rules', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('discount_id');
            $table->boolean('active_auto')->default(false)->nullable();
            $table->string('product_rule_type')->nullable();
            $table->string('product_discount_rule_type')->nullable();
            $table->string('tag_value')->nullable();
            $table->string('product_rule_collection_id')->nullable();
            $table->string('limit')->nullable();
            $table->string('discount_type')->nullable();
            $table->string('discount')->nullable();
            $table->string('tag_value_discount')->nullable();
            $table->string('product_rule_discount')->nullable();
            $table->string('product_discount_ids')->nullable();
            $table->string('product_ids')->nullable();
            $table->string('product_rule_collection_id_discount')->nullable();
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
        Schema::dropIfExists('price_rules');
    }
}
