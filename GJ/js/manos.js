
//NIVEL DE LAVAR LAS MANOS

var fondo;
var derecha;
var izquierda;


var nivel_lavar_manos = {
	
	preload: funcion()
	{
		game.load.image('fondo','img/fondo.jpg');
		game.load.spritesheet('derecha', 'img/izquierda.png', 190, 93, 1);
		game.load.spritesheet('izquierda', 'img/derecha.png', 10, 100, 1);
	},

	create: funcion()
	{
		fondo=game.add.sprite(0,0,'fondo');
		fondo.width = 100;
		fondo.height =  300;

		derecha=game.add.sprite(10,10,'derecha');
		derecha.width = 0;
		derecha.height =  300;

		izquierda=game.add.sprite(10,10,'izquierda');
		izquierda.width=0;
		izquierda.height=300;
	},

};
