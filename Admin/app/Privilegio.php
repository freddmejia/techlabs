<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Privilegio extends Model
{
    protected $table = 'privilegio';
    protected $fillable = ['idRol', 'idUsuario'];

    public function usuario()
    {
        return $this->belongsTo('App\Usuario', 'idUsuario');
    }

    public function rol()
    {
        return $this->belongsTo('App\Rol', 'idRol');
    }

}