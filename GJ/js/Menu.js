//ESTA ES LA FASE DEL MENU DEL JUEGO
//Se crea una variable que contendra los estados
//var menu = {};

//Se crea el constructor de la fase que va a recibir la instancia del juego
var fondo;
var button;
var footer;
var nino;
var copas;
var levels;
var star;

//Se crea el esquema que va a tener el Menu
var menu = {
  preload: function()
  {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize(true);
    //Aqui se cargan los recursos que van a ser usados en el juego
  	game.load.image('fondo', 'img/background.jpg');
  	game.load.image('texto_bienvenido', 'img/bienvenido1.png');
  	game.load.spritesheet('botones_inicio', 'img/botones_inicio.png', 550, 350, 3);
  	game.load.image('footer', 'img/footer.png');
  	game.load.image('copas', 'img/scoreButton.png');
  	game.load.image('levels', 'img/levels.png');
  	game.load.image('star', 'img/starButton.png');
  	game.load.image('nino', 'img/img_nino.png');
  },
  create: function()
  {
    //Aqui se procesa todo lo que corresponde al iniciar el juego
  	fondo = game.add.image(0,0,'fondo');
  	fondo.width = screen.width;
  	fondo.height =  screen.height;
  	texto_bienvenido = game.add.image(0,0, 'texto_bienvenido');
  	//over , out, down

    console.log("esto " + game.width);
    console.log(game.height);
   // console.log(window.devicePixelRatio);
  	if(window.devicePixelRatio == 2)
  	{
  		texto_bienvenido.scale.setTo(window.devicePixelRatio/6,window.devicePixelRatio/6);
  		button = game.add.button(game.world.centerX - 90, 100, 'botones_inicio', this.actionOnClick, this, 1,0,2);
  		button.scale.setTo(window.devicePixelRatio/6,window.devicePixelRatio/6);
  		copas = game.add.image(game.world.centerX - 20, game.world.centerY  - 50, 'copas');
  		copas.width = 60;
  		copas.height = 60;
  		copas.enable
  		levels = game.add.image(game.world.centerX - 20, game.world.centerY  + 40, 'levels');
  		levels.width = 60;
  		levels.height = 60;
  		star = game.add.image(game.world.centerX - 20, game.world.centerY  + 120, 'star');
  		star.width = 60;
  		star.height = 60;

  	}
  	else
  	{
      console.log('por Aqui');
  		footer = game.add.image(0, game.world.centerY + 300 ,'footer');
  		console.log(window.innerHeight);
  		footer.width = screen.width;
  		footer.height = 100;
  		copas = game.add.image(game.world.centerX - 600, game.world.centerY + 300, 'copas');
  		copas.width = 90;
  		copas.height = 90;
  		levels = game.add.image(game.world.centerX - 100, game.world.centerY + 300, 'levels');
  		levels.width = 90;
  		levels.height = 90;
  		star = game.add.image(game.world.centerX + 500, game.world.centerY + 300, 'star');
  		star.width = 90;
  		star.height = 90;
  		button = game.add.button(game.world.centerX - 315, 200, 'botones_inicio', this.actionOnClick, this, 1,0,2);
  		nino = game.add.image(game.world.centerX - 150, game.world.centerY + 50, 'nino');
  		nino.width = 250;
  		nino.height = 250;
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

  //Funcion que abre la ventana de copas
  abrirCopas: function()
  {
    console.log('Vista de copas');
  },

  //Funcion que abre la ventana de niveles
  abrirNiveles: function()
  {

    console.log('Vista de Niveles');
            game.state.add('niveles', niveles);
      game.state.start('niveles');
  },

  //Funcion que abre el ranking de los jugadores
  abrirRanking: function()
  {
    console.log('Vista de Rankings');
    game.state.add('leaderboard', leaderBoard);
    game.state.start('leaderboard');
  },

  //Funcion que abre el inicio del juego
  actionOnClick: function()
  {
  	//Aqui pasa al juego
    console.log('Pulsado');
    //Aqui agrega la fase del juego con lo tuyo de esta manera:
    //BOCA
    /*game.state.add('herramientas_lavar_boca', herramientas_lavar_boca);
    game.state.start('herramientas_lavar_boca');*/


    //MANOS
   
    game.state.add('herramientas_lavar_manos', herramientas_lavar_manos);
    game.state.start('herramientas_lavar_manos');

    //HERRAMIENTAS DUCHA
/*
    game.state.add('ducha_primer_nivel', ducha_primer_nivel);
    game.state.start('ducha_primer_nivel');*/


        /*
    game.state.add('nivelManos', nivel_lavar_manos);
    game.state.start('nivelManos');*/
    
    /*game.state.add('prueba',pruebaJuego);
    game.state.start('prueba');*/
  },

};
