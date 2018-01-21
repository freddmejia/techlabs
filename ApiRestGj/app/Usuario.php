<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    //Se añade la tabla a la cual va a hacer referencia el modelo
    protected $table = 'usuario';
    //Se añaden los atributos que van a tener la tabla
    protected $fillable = ['nickname', 'password'];
    //Se añaden los campos que seran ocultos
    protected $hidden = ['id', 'estado'];


    //Relaciones
    public function privilegios()
    {
        //Devuelve todos los provilegios del usuario
        return $this->hasMany('App\Privilegio','idUsuario');
    }
}