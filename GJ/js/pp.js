
var game = new Phaser.Game(screen.width , screen.height, Phaser.AUTO, '',
	{ 	preload: cargarRecursos,
		create: crearJuego,
		update: actualizarJuego
	});


var fondo;
var button;
var footer;
var i_jugar;
var lateral_der;
var lateral_izq;

function cargarRecursos()
{
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.scale.setScreenSize(true);
	//Aqui se cargan los recursos que van a ser usados en el juego
	game.load.image('fondo', 'img/background.jpg');
	game.load.image('texto_bienvenido', 'img/bienvenido1.png');
	game.load.spritesheet('btnJugar', 'img/boton_jugar.png', 190, 93, 1);
	game.load.spritesheet('botones_inicio', 'img/botones_inicio.png', 550, 350, 3);
	game.load.image('footer', 'img/footer.png');
	game.load.image('copas', 'img/scoreButton.png');
	game.load.image('levels', 'img/levels.png');
	game.load.image('star', 'img/starButton.png');
	//game.load.image('i_jugar', 'img/icono_jugar.png');
	//game.load.image('lateral_izq', 'img/lateral.png');
	//game.load.image('lateral_der', 'img/lateral.png');
}

function crearJuego()
{
	//Aqui se procesa todo lo que corresponde al iniciar el juego
	fondo = game.add.sprite(0,0,'fondo');
	fondo.width = screen.width;
	fondo.height =  screen.height;
	texto_bienvenido = game.add.sprite(0,0, 'texto_bienvenido');
	footer = game.add.sprite(0, window.innerHeight,'footer');
	console.log(window.innerHeight);
	footer.width = screen.width;
	footer.height = 100;
	copas = game.add.sprite(100, window.innerHeight, 'copas');
	copas.width = 90;
	copas.height = 90;
	levels = game.add.sprite(600, window.innerHeight, 'levels');
	levels.width = 90;
	levels.height = 90;
	star = game.add.sprite(1100, window.innerHeight, 'star');
	star.width = 90;
	star.height = 90;
	//over , out, down


	/*if(window.devicePixelRatio == 2)
	{
		texto_bienvenido.scale.setTo(window.devicePixelRatio/6,window.devicePixelRatio/6);
		button = game.add.button(game.world.centerX - 90, 200, 'botones_inicio', actionOnClick, this, 1,0,2);
		button.scale.setTo(window.devicePixelRatio/6,window.devicePixelRatio/6);
	}
	else
	{*/
		button = game.add.button(game.world.centerX - 315, 200, 'botones_inicio', actionOnClick, this, 1,0,2);
	//}

	//lateral_der = game.add.sprite(0,0,'lateral_der');
	//lateral_der.height = screen.height;
	//lateral_izq = game.add.sprite(screen.width - 160,0, 'lateral_izq');
	//lateral_izq.height = screen.height;
	//i_jugar = game.add.sprite(20,20,'i_jugar');
}




function actionOnClick()
{
	console.log("Pulsado");
}



function actualizarJuego()
{
	//Aqui se procesa la informacion que se va a manejar en el hilo de ejecucion
}

var canoe = game.add.sprite(0, 0, 'canoe');
var person1 = game.add.sprite(0, 0, 'person1');
var person2 = game.add.sprite(0, 0, 'person2')
canoe.addChild(person1);
canoe.addChild(person2);
game.physics.enable(canoe, Phaser.Physics.P2);
