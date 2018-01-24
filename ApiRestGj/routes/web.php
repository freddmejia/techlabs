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
    //Obtener los jugadores que estan en el juego
    $router->get('jugadores', ['uses' => 'JugadorController@getJugadores']);

    //Obtener el jugador que esta pidiendo por el nickname
    $router->get('jugador/{nick}', ['uses' => 'JugadorController@getJugador']);

    //Agregar un nuevo jugador
    $router->post('jugador', ['uses' => 'JugadorController@nuevoJugador']);

    //Registramos el seguimiento
    $router->post('seguimiento', ['uses' => 'SeguimientoController@nuevoSeguimiento']);

    //Registramos el puntaje del jugador
    $router->put('jugador/{id}/{estrellas}/{copas}', ['uses' => 'JugadorController@registrarPuntaje']);

    Route::get('/data-user/{nombre}/{genero}','Controller@prueba');//para ingresar 
	Route::get('/info/{nombre}','Controller@prueba1');
	Route::get('/copas/{nombre}','Controller@prueba2');
	Route::get('/estrellas/{nombre}','Controller@prueba3');

});
