<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecommendsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recommends', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->boolean('active_auto')->default(false)->nullable();
            $table->string('product_rule_type')->nullable();
            $table->string('product_recommend_rule_type')->nullable();
            $table->string('tag_value')->nullable();
            $table->string('product_rule_collection_id')->nullable();
            $table->string('limit')->nullable();
            $table->string('tag_value_recommend')->nullable();
            $table->string('product_rule_recommend')->nullable();
            $table->string('product_rule_id')->nullable();
            $table->string('list_product_recommend')->nullable();
            $table->string('product_rule_collection_id_recommend')->nullable();
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
        Schema::dropIfExists('recommends');
    }
}
