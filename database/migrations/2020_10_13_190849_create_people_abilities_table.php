<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleAbilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people_abilities', function (Blueprint $table) {
            $table->interger('id')->unsigned();
            $table->integer('ability')->unsigned();
            $table->integer('person')->unsigned();            
            $table->string('percentage', 3);  
            $table->unique('id');          
            $table->primary('id');
            $table->foreign('ability')->references('id_ability')->on('abilities');
            $table->foreign('person')->references('id_person')->on('people');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('people_abilities');
    }
}
