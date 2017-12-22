
//Nivel de lavados de Manos


var fondo;
var derecha;
var izquierda;
var button1;
var button2;
var imagen;
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

var nivel_lavar_manos = {
  preload: function()
  {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	game.scale.pageAlignHorizontally = true;
  	game.scale.pageAlignVertically = true;
  	game.scale.setScreenSize(true);
  	game.load.image('fondo','img/fondo.jpg');
  	game.load.image('derecha', 'img/derecha.png');
  	game.load.image('izquierda', 'img/izquierda.png');
  	imagen=game.load.image('imagen','img/dientes/1.png');
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
      imagen= game.add.sprite(0, game.world.centerY - 300, 'imagen');
      imagen1= game.add.sprite(200, game.world.centerY - 300, 'imagen1');
      imagen2= game.add.sprite(400, game.world.centerY - 300, 'imagen2');
      imagen3= game.add.sprite(600, game.world.centerY - 300, 'imagen3');
      imagen4= game.add.sprite(0, game.world.centerY - 50,  'imagen4');
      imagen5= game.add.sprite(200, game.world.centerY - 50,  'imagen5');
      imagen6= game.add.sprite(400, game.world.centerY - 50,  'imagen6');
      imagen7= game.add.sprite(600, game.world.centerY - 50,  'imagen7');


    /*  text = game.add.text(game.world.centerX, 550, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
      text.anchor.setTo(0.5, 0.5);
  */

      //4 significa los segundos, Phaser.Timer.SECOND 1 segundo es 1000 milisegundos
      game.time.events.add(Phaser.Timer.SECOND * 20, this.fadePicture, this);
      //timer=game.time.events.loop(Phaser.Timer.SECOND, fadePicture, this);
  },

  fadePicture: function()
  {
    game.add.tween(imagen).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen1).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen2).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen3).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen4).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen5).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen6).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen7).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
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

};
