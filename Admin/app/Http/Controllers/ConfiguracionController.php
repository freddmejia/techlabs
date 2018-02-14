<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Configuracion;

class ConfiguracionController extends Controller
{
    //

    public function index()
    {
        $configuracion = Configuracion::find(1);
        return view('configuracion', ['configuracion' => $configuracion]);
    }

    public function ActualizarConfiguracion(Request $request)
    {
        $request->validate([
            'copas' => 'required|integer',
            'estrellas' => 'required|integer'
        ]);



        $copas = $request->input('copas');
        $estrellas = $request->input('estrellas');

        $configuracion = Configuracion::find(1);

        $configuracion->copas = $copas;
        $configuracion->estrellas = $estrellas;
        $configuracion->save();

        return view('configuracion', ['configuracion' => $configuracion]);
    }
}
