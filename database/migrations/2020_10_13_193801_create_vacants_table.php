<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVacantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacants', function (Blueprint $table) {
            $table->unsignedInteger('id_vacant');
            $table->longText('description');
            $table->integer('salary');
            $table->string('duration', 50);
            $table->integer('company')->unsigned();
            $table->integer('ability')->unsigned();
            $table->primary('id_vacant');
            $table->foreign('company')->references('id_company')->on('companies');
            $table->foreign('ability')->references('id_ability')->on('abilities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vacants');
    }
}
