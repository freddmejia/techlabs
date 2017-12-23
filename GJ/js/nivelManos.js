
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
var tween;

//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
var posiciones = [8,8,8,8,8,8,8,8];

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
  	imagen0=game.load.image('imagen0','img/dientes/1.png');
  	imagen1=game.load.image('imagen1','img/dientes/2.png');
  	imagen2=game.load.image('imagen2','img/dientes/3.png');
  	imagen3=game.load.image('imagen3','img/dientes/4.png');
  	imagen4=game.load.image('imagen4','img/dientes/5.png');
  	imagen5=game.load.image('imagen5','img/dientes/6.png');
  	imagen6=game.load.image('imagen6','img/dientes/7.png');
  	imagen7=game.load.image('imagen7','img/dientes/8.png');

  	//cargar la imagen
  	//group = game.add.group();
  	//group.enableBody = true;
  },

  create: function()
  {
    fondo=game.add.sprite(0,0,'fondo');
  	fondo.width = screen.width;
  	fondo.height =  screen.height;

      imagen0= game.add.sprite(game.world.centerX - 600, game.world.centerY - 300, 'imagen0');
      imagen0.width = 200;
      imagen0.height = 280;
      imagen1= game.add.sprite(game.world.centerX - 300, game.world.centerY - 300, 'imagen1');
      imagen1.width = 200;
      imagen1.height = 280;
      imagen2= game.add.sprite(game.world.centerX, game.world.centerY - 300, 'imagen2');
      imagen2.width = 200;
      imagen2.height = 280;
      imagen3= game.add.sprite(game.world.centerX + 300, game.world.centerY - 300, 'imagen3');
      imagen3.width = 200;
      imagen3.height = 280;
      //---------------------------------------------------------------------------------------
      imagen4= game.add.sprite(game.world.centerX - 600, game.world.centerY,  'imagen4');
      imagen4.width = 200;
      imagen4.height = 280;
      imagen5= game.add.sprite(game.world.centerX - 300, game.world.centerY,  'imagen5');
      imagen5.width = 200;
      imagen5.height = 280;
      imagen6= game.add.sprite(game.world.centerX, game.world.centerY,  'imagen6');
      imagen6.width = 200;
      imagen6.height = 280;
      imagen7= game.add.sprite(game.world.centerX + 300, game.world.centerY,  'imagen7');
      imagen7.width = 200;
      imagen7.height = 280;

      //this.randomImage();

    /*  text = game.add.text(game.world.centerX, 550, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
      text.anchor.setTo(0.5, 0.5);
  */

      sprites = game.add.group();
      sprites.create();

      //4 significa los segundos, Phaser.Timer.SECOND 1 segundo es 1000 milisegundos
      game.time.events.add(Phaser.Timer.SECOND * 5, this.fadePicture, this);
      //timer=game.time.events.loop(Phaser.Timer.SECOND, fadePicture, this);

  },

  fadePicture: function()
  {
    tween = game.add.tween(imagen0).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    //tween.onComplete.add(this.randomImage, this);
    alert(this.getRandomArray(0, 7));
    tween.start();
    //game.add.tween(imagen1).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    //game.add.tween(imagen2).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    //game.add.tween(imagen3).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    //game.add.tween(imagen4).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    //game.add.tween(imagen5).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    //game.add.tween(imagen6).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    //game.add.tween(imagen7).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
  },

  update: function()
  {
    //game.physics.enable(group, Phaser.Physics.Arcade);
    //group.body.velocity.x -= 150;

  },

  render: function()
  {
      game.debug.text("El juego comienza en "+ "20 segundos, " + game.time.events.duration, 32, 32);
  },

  randomImage: function()
  {
    //Procedimiento de llenado aleatorio
    //Itero imagen por imagen

    for(var i = 0; i < 8; i++)
    {
      var n;
      var o = 0;
      do
      {
        //Genero un numero aleatorio
        n = Math.floor((Math.random() * 6));
        console.log("veces repetidas" + o++);
        console.log("numero generado" + n);
      }while(this.verificarPosicion(n));
      console.log("numero asiganado " + n);
      posiciones[i] = n;

    }
  },

  verificarPosicion: function(numero)
  {
    var existe = false;
    var c = 0;
    var d = 0;
    for(var i = 0; i < 8; i++)
    {
        if(posiciones[i] == numero)
        {
          console.log("veces acertadas" + d++);
          existe = true;
          return existe;
        }
        console.log("veces verificadas" + c++);
    }
    return existe;
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
