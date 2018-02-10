//Se crea la base de la pantalla principal
var game = new Phaser.Game(screen.width , screen.height, Phaser.CANVAS);
game.state.add('Menu', menu);

game.state.start('Menu');

/**
 * var fondo;
var button;
var footer;
var i_jugar;
var lateral_der;
var lateral_izq;
var nino;

function cargarRecursos()
{

}

function crearJuego()
{

}
 */
