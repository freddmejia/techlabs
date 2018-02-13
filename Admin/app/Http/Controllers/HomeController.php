<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jugador;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $fecha_desde = $request->input('desde');
        $fecha_hasta = $request->input('hasta');

        if(empty($fecha_desde) and empty($fecha_hasta))
        {
            //Consulta normal
            $jugadores = Jugador::all();
            return view('home', ['jugadores' => $jugadores]);
        }
        else
        {
            //Consulta con fechas
            $fecha_desde = str_replace('/', '-', $fecha_desde);
            $fecha_desde = date('Y-m-d', strtotime($fecha_desde));
    
            
            $fecha_hasta = str_replace('/', '-', $fecha_hasta);
            $fecha_hasta = date('Y-m-d', strtotime($fecha_hasta));

            $inicio = Jugador::orderBy('jugador.updated_at','DESC');
            //return $fecha_desde ." " .$fecha_hasta;
            $inicio=$inicio->where(DB::raw('date(updated_at)'),'>=',date('Y-m-d', strtotime($fecha_desde)));
            

            //return $inicio->get();

            $inicio=$inicio->where(DB::raw('date(updated_at)'),'<=',date('Y-m-d', strtotime($fecha_hasta) ) );
            // return $inicio->get();
            $jugadores=array();
            $jugadores=$inicio->get();
            //return $jugadores;
            //$reporteT['totales'] = $get1;

            return view('home', ['jugadores' => $jugadores]);
        }
    }
}
