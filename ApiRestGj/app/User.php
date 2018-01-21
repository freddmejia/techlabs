<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class User extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
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
