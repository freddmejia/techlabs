<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubescenarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subescenario', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('idEscenario')->unsigned();
            $table->string('nombre');
            $table->boolean('estado');
            $table->timestamps();

            $table->foreign('idEscenario')->references('id')->on('escenario');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subescenario');
    }
}
