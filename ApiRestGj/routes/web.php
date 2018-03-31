<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});




$router->group(['prefix' => 'api'], function () use ($router) {
    
    //Obtener el jugador que esta pidiendo por el nickname
    $router->get('jugador/{nick}', ['uses' => 'JugadorController@getJugador']);

    //Agregar un nuevo jugador
    $router->get('jugadorNuevo/{nick}/genero/{genre}', ['uses' => 'JugadorController@nuevoJugador']);

    //Registramos el seguimiento
    $router->get('seguimiento', ['uses' => 'SeguimientoController@nuevoSeguimiento']);

    //Registramos el puntaje del jugador
    $router->get('jugador/{nick}/{estrellas}', ['uses' => 'JugadorController@registrarPuntaje']);

    $router->get('/jugadores', ['uses' => 'JugadorController@players']);
    //guardar las copas y estrellas por el superadmin
    $router->get('/estrellasCopas/{estrellas}/{copas}',['uses' => 'JugadorController@cps']);
    $router->get('/leaderBoard', ['uses' => 'JugadorController@leaderBoard']);
});
