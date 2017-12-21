//VISTA DE LEADERBOARD
var fondo;
var footer;
var copas;
var levels;
var star;
var Board;

var leaderBoard = {
  preload: function()
  {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize(true);

    game.load.image('fondo', 'img/background.jpg');
  	game.load.image('texto_bienvenido', 'img/bienvenido1.png');
  	game.load.image('footer', 'img/footer.png');
  	game.load.image('copas', 'img/scoreButton.png');
  	game.load.image('levels', 'img/levels.png');
  	game.load.image('star', 'img/starButton.png');
    game.load.image('Board', 'img/Ranking.jpg');
  },

  create: function()
  {
    //Aqui se procesa todo lo que corresponde al iniciar el juego
  	fondo = game.add.sprite(0,0,'fondo');
  	fondo.width = screen.width;
  	fondo.height =  screen.height;
  	texto_bienvenido = game.add.sprite(0,0, 'texto_bienvenido');
  	//over , out, down


  	if(window.devicePixelRatio == 2)
  	{
      texto_bienvenido.scale.setTo(window.devicePixelRatio/6,window.devicePixelRatio/6);
      Board = game.add.image(game.world.centerX, game.world.centerY,'Board');

    }
    else
  	{
      footer = game.add.image(0, window.innerHeight,'footer');
  		console.log(window.innerHeight);
  		footer.width = screen.width;
  		footer.height = 100;
  		copas = game.add.image(game.world.centerX - 700, window.innerHeight, 'copas');
  		copas.width = 90;
  		copas.height = 90;
  		levels = game.add.image(game.world.centerX - 100, window.innerHeight, 'levels');
  		levels.width = 90;
  		levels.height = 90;
  		star = game.add.image(game.world.centerX + 500, window.innerHeight, 'star');
  		star.width = 90;
  		star.height = 90;
      Board = game.add.image(0, game.world.centerY - 360,'Board');
      Board.width = screen.width;
      Board.height = 715;
    }

    //Se habilita la opcion de poder pulsar las imagenes como botones
  	copas.inputEnabled = true;
  	levels.inputEnabled = true;
  	star.inputEnabled = true;

  	//Se añade la funcion que va a procesar el click
  	copas.events.onInputDown.add(this.abrirCopas, this);
  	levels.events.onInputDown.add(this.abrirNiveles, this);
  	star.events.onInputDown.add(this.abrirRanking, this);

  },

  abrirCopas: function()
  {
    console.log('Vista de copas');
  },

  //Funcion que abre la ventana de niveles
  abrirNiveles: function()
  {
    console.log('Vista de Niveles');
  },

  //Funcion que abre el ranking de los jugadores
  abrirRanking: function()
  {
    console.log('Vista de Rankings');
    game.state.add('leaderboard', leaderBoard);
    game.state.start('leaderboard');
  },
};
