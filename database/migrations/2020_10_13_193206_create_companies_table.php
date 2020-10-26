<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->unsignedInteger('id_company');
            $table->string('name', 100);
            $table->string('rfc', 13);
            $table->longText('address');
            $table->string('profile', 30);
            $table->string('schedule', 50);
            $table->integer('sector')->unsigned();
            $table->primary('id_company');
            $table->foreign('sector')->references('id_sector')->on('sectors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
