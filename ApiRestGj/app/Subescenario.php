<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Subescenario extends Model
{
    protected $table = 'subescenario';
    protected $fillable = ['idEscenario', 'nombre', 'estado'];
    
    public function seguimientos()
    {
        return $this->hasMany('App\Seguimiento', 'idSubescenario');
    }
}