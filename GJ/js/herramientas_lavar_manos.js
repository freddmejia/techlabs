
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
var input;
//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
var posiciones = [];
var tween;
var nick;
var genero;
var ok;
var herramientas_lavar_manos = {
  preload: function()
  {
    //game.add.plugin(PhaserInput.Plugin);
    game.plugins.add(Fabrique.Plugins.InputField);
    game.plugins.add(PhaserInput.Plugin);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	game.scale.pageAlignHorizontally = true;
  	game.scale.pageAlignVertically = true;
  	game.scale.setScreenSize(true);
  	game.load.image('fondo','img/fondo.jpg');
  	game.load.image('derecha', 'img/derecha.png');
  	game.load.image('izquierda', 'img/izquierda.png');
  	game.load.image('imagen9','img/manos/9.png');
  	game.load.image('imagen10','img/manos/10.png');
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
      
      game.add.text(400, 100, 'ACCESORIOS PARA LAVAR MANOS', style);

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

      //input = game.add.inputField(10, 90);


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

   /* var game = new Phaser.Game(screen.width , screen.height, Phaser.AUTO);
    game.state.add('herramientas_juego_lavar_manos', herramientas_juego_lavar_manos);
    game.state.start('herramientas_juego_lavar_manos');
*/
   /* input = game.add.inputField(10, 90, {
    font: '18px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 150,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    placeHolder: 'Password',
    type: PhaserInput.InputType.password
});

*/

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
    game.state.add('herramientas_juego_lavar_manos', herramientas_juego_lavar_manos);
    game.state.start('herramientas_juego_lavar_manos');
  }
}
else
{
  console.log("No se puede");
  throw new Error('Tu Browser no soporta LocalStorage!');
}
    


    /*    
    game.state.add('juego_manos', juego_manos);
    game.state.start('juego_manos');*/
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
        game.state.add('herramientas_juego_lavar_manos', herramientas_juego_lavar_manos);
        game.state.start('herramientas_juego_lavar_manos');
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
