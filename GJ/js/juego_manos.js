
//Nivel de lavados de Manos


var fondo;
var derecha;
var izquierda;
var button1;
var button2;
var imagen0;
var imagen1;
var imagen2;
var imagen3;
var imagen4;
var imagen5;
var imagen6;
var group;
var con=0;
var text=0;
var timer=0;
var emitter;
var n=0;
//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
var posiciones = [];
var ran=0;
var anterior=0;
var cont=0;
var existe=false;
var juego_manos = {
  preload: function()
  {
    console.log('clase nueva');
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	game.scale.pageAlignHorizontally = true;
  	game.scale.pageAlignVertically = true;
  	game.scale.setScreenSize(true);
  	game.load.image('fondo','img/fondo.jpg');

  	imagen0=game.load.image('imagen','img/dientes/1.png');
  	imagen1=game.load.image('imagen1','img/dientes/2.png');
  	imagen2=game.load.image('imagen2','img/dientes/3.png');
  	imagen3=game.load.image('imagen3','img/dientes/4.png');
  	imagen4=game.load.image('imagen4','img/dientes/5.png');
  	imagen5=game.load.image('imagen5','img/dientes/6.png');
  	imagen6=game.load.image('imagen6','img/dientes/7.png');
  	imagen7=game.load.image('imagen7','img/dientes/8.png');

  	//cargar la imagen
  	group=game.add.group();
  	group.enableBody = true;
  },

  create: function()
  {
    fondo=game.add.sprite(0,0,'fondo');
  	fondo.width = screen.width;
  	fondo.height =  screen.height;
    //console.log("random "+Math.floor(Math.random()*3));
    //  console.log("random "+Math.floor(Math.random() * 7));
  },

};
