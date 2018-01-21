<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Jugador extends Model
{
    protected $table = 'jugador';
    protected $fillable = ['nickname', 'copas', 'estrellas','estado'];

    public function seguimientos()
    {
        return $this->hasMany('App\Seguimientos', 'idJugador');
    }
}