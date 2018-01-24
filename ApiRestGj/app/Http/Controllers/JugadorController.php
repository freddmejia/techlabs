<?php

namespace App\Http\Controllers;

use App\Jugador;
use Illuminate\Http\Request;

class JugadorController extends Controller
{
    //Obtener jugadores
    public function getJugadores()
    {
        return response()->json(Jugador::all());
    }

    //Obtener jugador por nombre
    public function getJugador($nick)
    {
        $jugador = Jugador::where('nickname', $nick)->first();
        return response()->json($jugador);
    }

    //Se crea un nuevo jugador
    public function nuevoJugador($nick)
    {
        $nuevoJugador = Jugador::create(
            ['nickname' => $nick, 
            ]
        );
    }

    

}