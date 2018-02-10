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
var nick;
var genero;
var ok;
//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
var posiciones = [];
var tween;

var ducha_primer_nivel = {
  preload: function()
  {
    game.plugins.add(Fabrique.Plugins.InputField);
    game.plugins.add(PhaserInput.Plugin);
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
    game.load.image('ok','img/ok.png');
   
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
      

      game.add.text(400, 100, 'ACCESORIOS PARA DUCHARSE', style);

      imagen0= game.add.sprite((valor_division * 2), 200, 'imagen0');
      game.add.text((valor_division * 2), 200, '1', style);
      imagen0.width = 150;
      imagen0.height = 250;

      imagen1= game.add.sprite((valor_division * 3), 200, 'imagen1');
      game.add.text((valor_division * 3), 200, '2', style);
      imagen1.width = 150;
      imagen1.height = 250;

      imagen2= game.add.sprite((valor_division * 4), 200, 'imagen2');
      game.add.text((valor_division * 4), 200, '3', style);
      imagen2.width = 150;
      imagen2.height = 250;

      imagen3= game.add.sprite((valor_division * 5), 200, 'imagen3');
      game.add.text((valor_division * 5), 200, '4', style);
      imagen3.width = 150;
      imagen3.height = 250;







      //4 significa los segundos, Phaser.Timer.SECOND 1 segundo es 1000 milisegundos
      game.time.events.add(Phaser.Timer.SECOND * 1, this.fadePicture, this);
      //timer=game.time.events.loop(Phaser.Timer.SECOND, fadePicture, this);
  },

  fadePicture: function()
  {
    game.add.tween(imagen0).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen1).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    game.add.tween(imagen2).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);

    tween = game.add.tween(imagen3).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
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
      var NickName = "";
      if(window.sessionStorage)
      {
        NickName = sessionStorage.getItem("NickName");
        if(NickName == null)
        {
          //Se agrega el input del nickname
          nick = game.add.inputField(game.world.centerX - 150, game.world.centerY, {
            font: '30px Arial',
            fill: '#212121',
            fontWeight: 'bold',
            height: 14,
            width: 175,
            borderWidth: 1,
            padding: 20,
            borderColor: '#000',
            //borderRadius: 6,
            placeHolder: 'nickname',
            type: Fabrique.InputType.text
          });

          nick.blockInput = false;

          //Se agrega el input del genero
          genero = game.add.inputField(game.world.centerX - 150, game.world.centerY + 100, {
            font: '30px Arial',
            fill: '#212121',
            fontWeight: 'bold',
            height: 14,
            width: 175,
            borderWidth: 1,
            padding: 20,
            borderColor: '#000',
            //borderRadius: 6,
            placeHolder: 'Genero',
            type: Fabrique.InputType.text
          });

          //Agregamos un boton para enviar la informacion
          ok= game.add.sprite(game.world.centerX - 75,game.world.centerY + 200, 'ok');
          ok.width = 100;
          ok.height = 100;
          ok.inputEnabled = true;
          ok.events.onInputDown.add(this.procesar);
        }
        else{
          console.log(NickName);
          game.state.add('ducha_primer_nivel_juego', ducha_primer_nivel_juego);
          game.state.start('ducha_primer_nivel_juego');
        }
      }
      else
      {
        console.log("No se puede");
        throw new Error('Tu Browser no soporta LocalStorage!');
      }
  },

  procesar: function(){
    $.ajax({
      method: "GET",
      url: "http://localhost:8000/api/jugadorNuevo/" + nick.value + "/genero/" + genero.value,
      dataType: "json",
      success: function(data){
        var info = data;
        console.log(info.data);
        if(window.sessionStorage)
        {
          sessionStorage.setItem("NickName", nick.value);
        }
        else
        {
          console.log("No se puede");
          throw new Error('Tu Browser no soporta LocalStorage!');
        }
        game.state.add('ducha_primer_nivel_juego', ducha_primer_nivel_juego);
        game.state.start('ducha_primer_nivel_juego');
      }
    });
  },

  getRandomArray: function(min,max){
    var A= [];
    while(max>= min) A.push(max--)
    A.sort(function(){return .5- Math.random()});
    return A;
  }
};
