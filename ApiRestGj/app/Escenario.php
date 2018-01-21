<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Escenario extends Model
{
    protected $table = 'escenario';
    protected $fillable = ['nombre', 'estado'];
    
    public function subescenarios()
    {
        return $this->hasMany('App\Subescenario', 'idEscenario');
    }    
}
