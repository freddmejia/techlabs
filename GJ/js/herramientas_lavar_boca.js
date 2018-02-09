
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
var nick;
var genero;
var ok;
var herramientas_lavar_boca = {
  preload: function()
  {
    //this.game.add.plugin(PhaserInput.Plugin);
    nick="";
    game.plugins.add(Fabrique.Plugins.InputField);
    game.plugins.add(PhaserInput.Plugin);
    //game.add.plugin(Fabrique.Plugins.InputField);


    //game.plugins.add(PhaserInput.Plugin);

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	game.scale.pageAlignHorizontally = true;
  	game.scale.pageAlignVertically = true;
  	game.scale.setScreenSize(true);
  	game.load.image('fondo','img/fondo.jpg');
  	game.load.image('derecha', 'img/derecha.png');
  	game.load.image('izquierda', 'img/izquierda.png');
  	game.load.image('imagen9','img/dientes/9.png');
    game.load.image('imagen10','img/dientes/10.png');
    game.load.image('ok','img/ok.png');
  	

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
    //nick.update();
    game.physics.enable(group, Phaser.Physics.Arcade);
    //group.body.velocity.x -= 150;
  },

  render: function()
  {
      game.debug.text("El juego comienza en "+ "20 segundos, " + game.time.events.duration, 32, 32);
  },

  cambiarVista: function()
  {
    console.log('error ok');




  /*  nick= game.add.inputField(game.world.centerX, 290, {
    font: '18px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 150,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    //borderRadius: 6,
    placeHolder: 'nickname',
    type: PhaserInput.InputType.text
  });
*/
    var input1;
    var bmd = this.add.bitmapData(400, 50);    
    var input = this.game.add.sprite(game.world.centerX, game.world.centerY, bmd);
    input.anchor.set(0.5);
   // input.canvasInput.value('nickname');
    //input.canvasInput.focus();
    //this.game.add.tween(this.input1).to({ y: 600 }, 6000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

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
  //nick.inputEnabled=true;
    //input1.inputEnabled = true;
    //input1.input.useHandCursor = true;    
    //input1.events.onInputUp.add(this.inputFocus, this);
    


    //////////////////////
    /*    
    game.state.add('juego_manos', juego_manos);
    game.state.start('juego_manos');*/
  },

  procesar: function(){
    /*console.log(nick.value);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function()
    {
      if(xmlhttp.readyState == XMLHttpRequest.DONE)
      {
        if(xmlhttp.status == 200)
        {
          game.state.add('juego_manos', juego_manos);
          game.state.start('juego_manos');
        }
        else if(xmlhttp.status == 400)
        {
          console.log('400');
        }
        else
        {
          console.log('another error');
          console.log(xmlhttp.status);
          game.state.add('juego_manos', juego_manos);
          game.state.start('juego_manos');
        }
      }
    }

    xmlhttp.open("GET", "http://localhost:8000/api/jugadorNuevo/"+nick.value+"/genero/M", true);
    xmlhttp.send();*/

    $.ajax({
      method: "GET",
      url: "http://localhost:8000/api/jugadorNuevo/" + nick.value + "/genero/" + genero.value,
      dataType: "json",
      success: function(data){
        var info = data;
        console.log(info.data);
        if(window.localStorage)
        {
          localStorage.setItem("NickName", nick.value);
        }
        else
        {
          console.log("No se puede");
          throw new Error('Tu Browser no soporta LocalStorage!');
        }
        game.state.add('herramientas_juego_lavar_boca', herramientas_juego_lavar_boca);
        game.state.start('herramientas_juego_lavar_boca');
      }
    });

  },

  inputFocus: function(sprite){
    sprite.canvasInput.focus();
  },
  getRandomArray: function(min,max){
    var A= [];
    while(max>= min) A.push(max--)
    A.sort(function(){return .5- Math.random()});
    return A;
  }
};
