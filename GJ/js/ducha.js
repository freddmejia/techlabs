
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
var imagen9;
var imagen10;
var imagen11;
var imagen12;
var imagen13;
var group;
var con=0;
var text=0;
var timer=0;
var valor_division=0;
var valor_division1=0;
//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
var posiciones = [];
var tween;

var nivel_ducha = {
  preload: function()
  {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	game.scale.pageAlignHorizontally = true;
  	game.scale.pageAlignVertically = true;
  	game.scale.setScreenSize(true);
  	game.load.image('fondo','img/fondo.jpg');
  	game.load.image('derecha', 'img/derecha.png');
  	game.load.image('izquierda', 'img/izquierda.png');
  	game.load.image('imagen0','img/ducha/1.png');
  	game.load.image('imagen1','img/ducha/2.png');
  	game.load.image('imagen2','img/ducha/3.png');
  	game.load.image('imagen3','img/ducha/4.png');
  	game.load.image('imagen4','img/ducha/5.png');
  	game.load.image('imagen5','img/ducha/6.png');
  	game.load.image('imagen6','img/ducha/7.png');
  	game.load.image('imagen7','img/ducha/8.png');
    game.load.image('imagen8','img/ducha/9.png');
    game.load.image('imagen9','img/ducha/10.png');
    game.load.image('imagen10','img/ducha/11.png');
    game.load.image('imagen11','img/ducha/12.png');   
    game.load.image('imagen12','img/ducha/13.png');
    game.load.image('imagen13','img/ducha/14.png');
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
      valor_division = window.screen.width / 7;
      var style = { font: "30px Arial", fill: "#003AFE", align: "center" };
      


      imagen0= game.add.sprite((valor_division * 0), 190, 'imagen0');
      game.add.text((valor_division * 0), 190, '1', style);
      imagen0.width = 130;
      imagen0.height = 200;

      imagen1= game.add.sprite((valor_division * 1), 190, 'imagen1');
      game.add.text((valor_division * 1), 190, '2', style);
      imagen1.width = 130;
      imagen1.height = 200;

      imagen2= game.add.sprite((valor_division * 2), 190, 'imagen2');
      game.add.text((valor_division * 2), 190, '3', style);
      imagen2.width = 130;
      imagen2.height = 200;

      imagen3= game.add.sprite((valor_division * 3), 190, 'imagen3');
      game.add.text((valor_division * 3), 190, '4', style);
      imagen3.width = 130;
      imagen3.height = 200;

      
      imagen4= game.add.sprite((valor_division * 4), 190,  'imagen4');
      game.add.text((valor_division * 4), 190, '5', style);
      imagen4.width = 130;
      imagen4.height = 200;

      imagen5= game.add.sprite((valor_division * 5), 190,  'imagen5');
      game.add.text((valor_division * 5), 190, '6', style);
      imagen5.width = 130;
      imagen5.height = 200;

      imagen6= game.add.sprite((valor_division * 6), 190,  'imagen6');
      game.add.text((valor_division * 6), 190, '7', style);
      imagen6.width = 130;
      imagen6.height = 200;


      valor_division1 = window.screen.width / 7;


      imagen7= game.add.sprite((valor_division * 0), 410,  'imagen7');
      game.add.text((valor_division * 0), 410, '8', style);
      imagen7.width = 130;
      imagen7.height = 200;

      imagen8= game.add.sprite((valor_division * 1), 410, 'imagen8');
      game.add.text((valor_division * 1), 410, '9', style);
      imagen8.width = 130;
      imagen8.height = 200;

      imagen9= game.add.sprite((valor_division * 2), 410, 'imagen9');
      game.add.text((valor_division * 2), 410, '10', style);
      imagen9.width = 130;
      imagen8.height = 200;

      imagen10= game.add.sprite((valor_division * 3), 410,  'imagen10');
      game.add.text((valor_division * 3), 410, '11', style);
      imagen10.width = 130;
      imagen10.height = 200;

      imagen11= game.add.sprite((valor_division * 4), 410,  'imagen11');
      game.add.text((valor_division * 4), 410, '12', style);
      imagen11.width = 130;
      imagen11.height = 200;

      imagen12= game.add.sprite((valor_division * 5), 410,  'imagen12');
      game.add.text((valor_division * 5), 410, '13', style);
      imagen12.width = 130;
      imagen12.height = 200;

      imagen13= game.add.sprite((valor_division * 6), 410,  'imagen13');
      game.add.text((valor_division * 6), 410, '14', style);
      imagen13.width = 130;
      imagen13.height = 200;




      //4 significa los segundos, Phaser.Timer.SECOND 1 segundo es 1000 milisegundos
    //game.time.events.add(Phaser.Timer.SECOND * 20, this.fadePicture, this);
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
