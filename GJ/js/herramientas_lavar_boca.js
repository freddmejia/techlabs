
//Nivel de lavados de Manos


var fondo;
var derecha;
var izquierda;
var button1;
var button2;
var imagen9;
var imagen10;
var group;
var con=0;
var text=0;
var timer=0;
var valor_division=0;
//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
var posiciones = [];
var tween;

var herramientas_lavar_boca = {
  preload: function()
  {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	game.scale.pageAlignHorizontally = true;
  	game.scale.pageAlignVertically = true;
  	game.scale.setScreenSize(true);
  	game.load.image('fondo','img/fondo.jpg');
  	game.load.image('derecha', 'img/derecha.png');
  	game.load.image('izquierda', 'img/izquierda.png');
  	game.load.image('imagen9','img/dientes/9.png');
  	game.load.image('imagen10','img/dientes/10.png');
  	

  	//cargar la imagen
  	group=game.add.group();
  	group.enableBody = true;
  },

  create: function()
  {
    fondo=game.add.sprite(0,0,'fondo');
  	fondo.width = screen.width;
  	fondo.height =  screen.height;
    console.log('create');
      //console.log(game.world.centerX - 600);
      valor_division = window.screen.width / 2;
      var style = { font: "30px Arial", fill: "#003AFE", align: "center" };
      
      game.add.text(400, 100, 'ACCESORIOS PARA LAVAR LOS DIENTES', style);

      imagen9= game.add.sprite(500, 200, 'imagen9');
      game.add.text(505, 205, '1', style);
      imagen9.width = 160;
      imagen9.height = 250;
      
      imagen10= game.add.sprite(700, 200, 'imagen10');
      game.add.text(705, 205, '2', style);
      imagen10.width = 160;
      imagen10.height = 250;
      

      //4 significa los segundos, Phaser.Timer.SECOND 1 segundo es 1000 milisegundos
      game.time.events.add(Phaser.Timer.SECOND * 1, this.fadePicture, this);
      //timer=game.time.events.loop(Phaser.Timer.SECOND, fadePicture, this);
  },

  fadePicture: function()
  {
    game.add.tween(imagen9).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
   
    tween = game.add.tween(imagen10).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    tween.onComplete.add(this.cambiarVista, this);
    tween.start();
  },

  update: function()
  {
    game.physics.enable(group, Phaser.Physics.Arcade);
    //group.body.velocity.x -= 150;

  },

  render: function()
  {
      game.debug.text("El juego comienza en "+ "20 segundos, " + game.time.events.duration, 32, 32);
  },

  cambiarVista: function()
  {
    game.state.add('herramientas_juego_lavar_boca', herramientas_juego_lavar_boca);
    game.state.start('herramientas_juego_lavar_boca');
    /*    
    game.state.add('juego_manos', juego_manos);
    game.state.start('juego_manos');*/
  },


  getRandomArray: function(min,max){
    var A= [];
    while(max>= min) A.push(max--)
    A.sort(function(){return .5- Math.random()});
    return A;
  }
};
