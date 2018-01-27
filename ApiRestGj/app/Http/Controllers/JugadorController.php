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
    public function nuevoJugador($nick,$genre)
    {

        $nuevoJugador = Jugador::create(
            ['nickname' => $nick,
            'copas' => $copas,
            'estrellas' => $estrellas,
            'estado' => true

        //verificar que no exista el jugador
        $player=Jugador::where('nickname',$nick)
                    ->where('genero',$genre)
                    ->get()
                    ->first();
        if(!empty($player))
        {
            return $data["data"]="jugador existe";
        }
        else
        {
            $nuevoJugador = new Jugador();
            $nuevoJugador->nickname=$nick;
            $nuevoJugador->genero=$genre;
            $nuevoJugador->estado = 1;
            $nuevoJugador->save();  
            return $data["data"]="null";  
        }
       /* $nuevoJugador = Jugador::create(
            ['nickname' => $nick, 
            ]
        );*/


    }

    

}