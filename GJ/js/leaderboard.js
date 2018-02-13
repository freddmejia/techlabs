//VISTA DE LEADERBOARD
var fondo;
var footer;
var copas;
var levels;
var star;
var Board;
var back;

//  The Google WebFont Loader will look for this object, so create it before loading the script.
WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, leaderBoard.createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Finger Paint']
    }

};


var leaderBoard = {
  preload: function()
  {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize(true);

    //  Load the Google WebFont Loader script
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

    game.load.image('fondo', 'img/background.jpg');
  	game.load.image('texto_bienvenido', 'img/bienvenido1.png');
  	game.load.image('footer', 'img/footer.png');
  	game.load.image('copas', 'img/scoreButton.png');
  	game.load.image('levels', 'img/levels.png');
  	game.load.image('star', 'img/starButton.png');
    game.load.image('Board', 'img/Ranking.jpg');
    game.load.image('Back', 'img/backHome.png');
  },

  create: function()
  {
    //Aqui se procesa todo lo que corresponde al iniciar el juego
  	fondo = game.add.image(0,0,'fondo');
  	fondo.width = screen.width;
  	fondo.height =  screen.height;
  	texto_bienvenido = game.add.image(0,0, 'texto_bienvenido');
  	//over , out, down


  	if(window.devicePixelRatio == 2)
  	{
      //var style = { font: "15px Revalia", fill: "#fff", tabs: [ 150 ] };
      var style = { font: "28px Finger Paint", fill: "#fff", tabs: [ 150 ] };
      texto_bienvenido.scale.setTo(window.devicePixelRatio/6,window.devicePixelRatio/6);
      Board = game.add.image(0, game.world.centerY - 200,'Board');
      Board.width = screen.width;
      Board.height = 350;
      back = game.add.image(game.world.centerX - 40, game.world.centerY + 180, 'Back');
      back.width = 90;
      back.height = 80;
      //text = game.add.text(game.world.centerX, game.world.centerY, 'JUGADOR', style);

    }
    else
  	{
      //var style = { font: "35px Revalia", fill: "#fff", tabs: [ 0 ] };
      footer = game.add.image(0, game.world.centerY + 390,'footer');
  		console.log(window.innerHeight);
  		footer.width = screen.width;
  		footer.height = 100;
  		copas = game.add.image(game.world.centerX - 700, game.world.centerY + 400, 'copas');
  		copas.width = 90;
  		copas.height = 90;
  		levels = game.add.image(game.world.centerX - 100, game.world.centerY + 400, 'levels');
  		levels.width = 90;
  		levels.height = 90;
  		star = game.add.image(game.world.centerX + 500, game.world.centerY + 400, 'star');
  		star.width = 90;
  		star.height = 90;
      Board = game.add.image(0, game.world.centerY - 360,'Board');
      Board.width = screen.width;
      Board.height = 750;
      back = game.add.image(game.world.centerX + 500, 20, 'Back');
      back.width = 150;
      back.height = 150;
      //text = game.add.text(game.world.centerX, game.world.centerY, 'JUGADOR', style);

      //Se habilita la opcion de poder pulsar las imagenes como botones
    	copas.inputEnabled = true;
    	levels.inputEnabled = true;
    	star.inputEnabled = true;

    	//Se añade la funcion que va a procesar el click
    	copas.events.onInputDown.add(this.abrirCopas, this);
    	levels.events.onInputDown.add(this.abrirNiveles, this);
    	star.events.onInputDown.add(this.abrirRanking, this);

    }

    back.inputEnabled = true;
    back.events.onInputDown.add(this.regresar, this);

  },

  createText: function()
  {
    var style = { font: "28px Finger Paint", fill: "#fff", tabs: [164,120,80] };
    /*var cabereceras=["JUGADOR","COPAS","PUNTAJE","FECHA"];
    var dat=[];
    var cabecera;
    var incre=0;*/
    var cabecera1 = game.add.text(game.world.centerX - 300,90, "JUGADOR", style);
    var cabecera2 = game.add.text(game.world.centerX - 100,90, "COPAS", style);
    var cabecera3 = game.add.text(game.world.centerX + 100,90, "PUNTAJE", style);
    var cabecera4 = game.add.text(game.world.centerX + 300,90, "FECHA", style);
   // cabecera = game.add.text(game.world.centerX - 220,90, '', style);
   //cabecera.parseList(cabereceras);

   cabecera1.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);
   cabecera2.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);
   cabecera3.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);
   cabecera4.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);


    $.ajax({
      method: "GET",
      url: "http://localhost:8000/api/leaderBoard/",
      dataType: "json",
      success: function(data){
        var info = data;
        console.log(info)
        if(info.length>=0)
        {
          var y = 180;
          $.each(info,function(index,item){
            console.log(item);
            //dat.push([item.nickname,item.copas,item.estrellas,item.updated_at]);
            
            //registro = game.add.text(game.world.centerX - 220, y, item.nickname+"\t"+item.estrellas+"\t"+item.updated_at, style);
            //registro.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);
            var name = game.add.text(game.world.centerX - 300, y, item.nickname,style);
            var copas = game.add.text(game.world.centerX - 100, y, item.copas,style)
            var estrellas = game.add.text(game.world.centerX + 100, y, item.estrellas,style);
            var fecha = game.add.text(game.world.centerX + 300, y, item.updated_at,style);
            //registro = game.add.text(game.world.centerX - 220, y, +"\t"++"\t"+, );
            //registro.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);
            name.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);
            copas.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);
            estrellas.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);
            fecha.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);
            y = y + 90;
          });
        }
      }
    });
    //registro=game.add.text(game.world.centerX - 220, 180,'',style);
    //registro.parseList(dat);
    

    

    //registro2 = game.add.text(game.world.centerX - 220, game.world.centerY, "JUGADOR 2\t  10     \t             21/12/2017", style);
    //registro2.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);
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

  //Funcion para regresar a la vista home
  regresar: function()
  {
    game.state.start('Menu');
  }
};
