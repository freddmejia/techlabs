<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Rol extends Model
{
    protected $table = 'rol';
    protected $fillable = ['nombre', 'estado'];

    public function privilegios()
    {
        return $this->hasMany('App\Privilegio', 'idRol');
    }

}