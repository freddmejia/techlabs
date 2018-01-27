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
            $nuevoJugador->copas = 0;
            $nuevoJugador->estrellas = 0;
            $nuevoJugador->save();  
            return $data["data"]="null";  
        }
       /* $nuevoJugador = Jugador::create(
            ['nickname' => $nick, 
            ]
        );*/


    }

    public function registrarPuntaje($nick,$estrellas)
    {
        $buscarP=Jugador::where('nickname','=',$nick)->get()->first();

        if(!empty($buscarP))
        {   
            //sumar las estrellas
            $estrellasJ=$estrellas + $buscarP->estrellas;

            $buscarP->estrellas=$estrellasJ;
            //$buscarP->copas=$copas;
            $buscarP->save();
            return $data['data']="cambios hechos";

        }
        else
        {
            return $data['data']="jugador no existe";
        }
    }
    public function players()
    {
        return $data['data']=Jugador::all();
    }

}