<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->unsignedInteger('id_person');
            $table->string('name');
            $table->string('apellidoPaterno',100);
            $table->string('apellidoMaterno',100);
            $table->string('email', 100);
            $table->longText('address');
            $table->integer('institution')->unsigned();
            $table->integer('career')->unsigned();
            $table->primary('id_person');
            $table->foreign('institution')->references('id_institution')->on('institutions');
            $table->foreign('career')->references('id_career')->on('careers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('people');
    }
}
