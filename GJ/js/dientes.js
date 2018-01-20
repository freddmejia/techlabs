
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
var imagen7;
var imagen8;
var group;
var con=0;
var text=0;
var timer=0;
var valor_division=0;
//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
var posiciones = [];
var tween;

var nivel_lavar_dientes = {
  preload: function()
  {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	game.scale.pageAlignHorizontally = true;
  	game.scale.pageAlignVertically = true;
  	game.scale.setScreenSize(true);
  	game.load.image('fondo','img/fondo.jpg');
  	game.load.image('derecha', 'img/derecha.png');
  	game.load.image('izquierda', 'img/izquierda.png');
  	game.load.image('imagen0','img/manos/1.png');
  	game.load.image('imagen1','img/manos/2.png');
  	game.load.image('imagen2','img/manos/3.png');
  	game.load.image('imagen3','img/manos/4.png');
  	game.load.image('imagen4','img/manos/5.png');
  	game.load.image('imagen5','img/manos/6.png');
  	game.load.image('imagen6','img/manos/7.png');
  	game.load.image('imagen7','img/manos/8.png');
   
   // game.load.image('imagen8','img/manos/9.png');

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
      valor_division = window.screen.width / 8;
      var style = { font: "30px Arial", fill: "#FE0023", align: "center" };
      


      imagen0= game.add.sprite((valor_division * 0), 200, 'imagen0');
      game.add.text((valor_division * 0), 200, '1', style);
      imagen0.width = 130;
      imagen0.height = 200;

      imagen1= game.add.sprite((valor_division * 1), 200, 'imagen1');
      game.add.text((valor_division * 1), 200, '2', style);
      imagen1.width = 130;
      imagen1.height = 200;

      imagen2= game.add.sprite((valor_division * 2), 200, 'imagen2');
      game.add.text((valor_division * 2), 200, '3', style);
      imagen2.width = 130;
      imagen2.height = 200;

      imagen3= game.add.sprite((valor_division * 3), 200, 'imagen3');
      game.add.text((valor_division * 3), 200, '4', style);
      imagen3.width = 130;
      imagen3.height = 200;

      //---------------------------------------------------------------------------------------
      imagen4= game.add.sprite((valor_division * 4), 200,  'imagen4');
      game.add.text((valor_division * 4), 200, '5', style);
      imagen4.width = 130;
      imagen4.height = 200;

      imagen5= game.add.sprite((valor_division * 5), 200,  'imagen5');
      game.add.text((valor_division * 5), 200, '6', style);
      imagen5.width = 130;
      imagen5.height = 200;

      imagen6= game.add.sprite((valor_division * 6), 200,  'imagen6');
      game.add.text((valor_division * 6), 200, '7', style);
      imagen6.width = 130;
      imagen6.height = 200;

      imagen7= game.add.sprite((valor_division * 7), 200,  'imagen7');
      game.add.text((valor_division * 7), 200, '8', style);
      imagen7.width = 130;
      imagen7.height = 200;





      //4 significa los segundos, Phaser.Timer.SECOND 1 segundo es 1000 milisegundos
      game.time.events.add(Phaser.Timer.SECOND * 1, this.fadePicture, this);
      //timer=game.time.events.loop(Phaser.Timer.SECOND, fadePicture, this);
  },

  fadePicture: function()
  {
    game.add.tween(imagen0).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen1).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen2).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen3).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen4).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen5).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen6).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    tween = game.add.tween(imagen7).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
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

    game.state.add('juego_dientes', juego_dientes);
    game.state.start('juego_dientes');
  },

  fillImages: function()
  {
    for(var i = 0; i > posiciones.length; i++)
    {
      switch (i) {
        case 0:
          var temp_imagen0 = game.add.sprite(game.world.centerX - 600, game.world.centerY - 300, 'imagen' + i);
          temp_imagen0.width = 200;
          temp_imagen0.height = 280;
          game.add.tween(temp_imagen0).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
          break;
        case 1:
          imagen1 = game.add.sprite(game.world.centerX - 300, game.world.centerY - 300, 'imagen' + i);
          imagen1.width = 200;
          imagen1.height = 280;
          break;
        case 2:
          imagen2= game.add.sprite(game.world.centerX, game.world.centerY - 300, 'imagen' + i);
          imagen2.width = 200;
          imagen2.height = 280;
          break;
        case 3:
          imagen3= game.add.sprite(game.world.centerX + 300, game.world.centerY - 300, 'imagen' + i);
          imagen3.width = 200;
          imagen3.height = 280;
          break;
        case 4:
          imagen4= game.add.sprite(game.world.centerX - 600, game.world.centerY,  'imagen' + i);
          imagen4.width = 200;
          imagen4.height = 280;
          break;
        case 5:
          imagen5= game.add.sprite(game.world.centerX - 300, game.world.centerY,  'imagen' + i);
          imagen5.width = 200;
          imagen5.height = 280;
          break;
        case 6:
          imagen6= game.add.sprite(game.world.centerX, game.world.centerY,  'imagen' + i);
          imagen6.width = 200;
          imagen6.height = 280;
          break;
        case 7:
          imagen7= game.add.sprite(game.world.centerX + 300, game.world.centerY,  'imagen' + i);
          imagen7.width = 200;
          imagen7.height = 280;
          break;
        case 8:
          imagen7= game.add.sprite(game.world.centerX + 300, game.world.centerY,  'imagen' + i);
          imagen7.width = 200;
          imagen7.height = 280;
          break;          
        default:

      }
    }
  },

  getRandomArray: function(min,max){
    var A= [];
    while(max>= min) A.push(max--)
    A.sort(function(){return .5- Math.random()});
    return A;
  }
};
