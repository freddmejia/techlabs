//Se crea la base de la pantalla principal
var game = new Phaser.Game(screen.width , screen.height, Phaser.CANVAS, "");

game.state.add('Menu', menu);
game.state.start('Menu');
