
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

var herramientas_lavar_manos = {
  preload: function()
  {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	game.scale.pageAlignHorizontally = true;
  	game.scale.pageAlignVertically = true;
  	game.scale.setScreenSize(true);
  	game.load.image('fondo','img/fondo.jpg');
  	game.load.image('derecha', 'img/derecha.png');
  	game.load.image('izquierda', 'img/izquierda.png');
  	game.load.image('imagen9','img/manos/9.png');
  	game.load.image('imagen10','img/manos/10.png');
  	

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

  createInput: function(x, y){
    var bmd = this.add.bitmapData(400, 50);    
    var myInput = this.game.add.sprite(x, y, bmd);
    
    myInput.canvasInput = new CanvasInput({
      canvas: bmd.canvas,
      fontSize: 30,
      fontFamily: 'Arial',
      fontColor: '#212121',
      fontWeight: 'bold',
      width: 400,
      padding: 8,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 3,
      boxShadow: '1px 1px 0px #fff',
      innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
      placeHolder: 'Enter message here...'
    });
    myInput.inputEnabled = true;
    myInput.input.useHandCursor = true;    
    myInput.events.onInputUp.add(this.inputFocus, this);
    
    return myInput;
  },

  cambiarVista: function()
  {

   /* var game = new Phaser.Game(screen.width , screen.height, Phaser.AUTO);
    game.state.add('herramientas_juego_lavar_manos', herramientas_juego_lavar_manos);
    game.state.start('herramientas_juego_lavar_manos');
*/
    this.myInput = this.createInput(this.game.world.centerX, 50);
    this.myInput.anchor.set(0.5);
    this.myInput.canvasInput.value('Esto es la verga! :D');
    this.myInput.canvasInput.focus();
    this.game.add.tween(this.myInput).to({ y: 600 }, 6000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);


    /*game.state.add('herramientas_juego_lavar_manos', herramientas_juego_lavar_manos);
    game.state.start('herramientas_juego_lavar_manos');
    */


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
