<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJugadorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('jugador'))
        {
            Schema::create('jugador', function (Blueprint $table) {
                $table->increments('id');
                $table->string('nickname');
                $table->integer('copas');
                $table->integer('estrellas');
                $table->boolean('estado');
                $table->timestamps();
                $table->rememberToken();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jugador');
    }
}
