<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Seguimiento extends Model
{
    protected $table = 'seguimiento';
    protected $fillable = ['idJugador', 'idSubescenario'];
}