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
var emitter;
var n=0;
var cn="";
var contador=0;
var contador2=3;
var xx=80;//default 980
var yy=84;//default 84
var       valor_division = 0;

var ancho=0;
var largo=0;
//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
var posiciones = [];
var ran=0;
var anterior=0;
var cont=0;
var existe=false;
var aa=[];
var pos1 = 0;
var pos2 = 0;
var jugar;
var herramientas_juego_lavar_boca = {
  preload: function()
  {
  /*  game.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
    game.load.bitmapFont('shortStack', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.fnt');
*/

 fondo;
 derecha;
 izquierda;
 button1;
 button2;
 imagen9;
 imagen10;

 group;
 con=0;
 text=0;
 timer=0;
 emitter;
 n=0;
 cn="";
 contador=0;
 contador2=3;
 xx=80;//default 980
 yy=84;//default 84
       valor_division = 0;

 ancho=0;
 largo=0;
//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
 posiciones = [];
 ran=0;
 anterior=0;
 cont=0;
 existe=false;
 aa=[];
 pos1 = 0;
 pos2 = 0;
 jugar;


    console.log('clase nueva');
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize(true);

    game.load.image('fondo','img/fondo.jpg');
    
    game.load.image('imagen9','img/dientes/9.png');
    game.load.image('imagen10','img/dientes/10.png');

    game.load.image('jugar',  'img/start1.png');
    game.load.image('Back', 'img/backHome.png');
  },

  create: function()
  {
    fondo=game.add.sprite(0,0,'fondo');
    fondo.width = screen.width;
    fondo.height =  screen.height;
    //cargar la imagen

    //console.log("random "+Math.floor(Math.random()*3));
    //  console.log("random "+Math.floor(Math.random() * 7));
    aa=[];
    aa=this.getRandomArray(9, 10);
        xx=80;
        yy=84;
    for (var i = 0; i < aa.length; i++) {

      //this.fillImages11(aa[i]);
      //se ingresa los nuevos valores
      //posiciones_imagenes[i]=aa[i];
      console.log('info');
      console.log(aa[i]);

      this.fillImages11(aa[i]);
    }

this.barrido();

      jugar= game.add.button(550, 650, 'jugar', this.evaluar, this, 1,0,2);
      jugar.width = 300;
      jugar.height = 100;

      back = game.add.image(game.world.centerX + 500, 20, 'Back');
      back.width = 150;
      back.height = 150;
      back.inputEnabled = true;
      back.events.onInputDown.add(this.regresar, this);  
  },
  regresar: function()
  {
        game.state.add('niveles', niveles);
    game.state.start('niveles'); 
  },
  getPosition: function(numero)
  {
        var nu=0,nu_valido=0;


        for (var i = 0; i < aa.length; i++)
        {
          //console.log('vaa');
          //console.log(aa[i]);
          if(aa[i]!=numero)
          {
            //console.log('diferente');
            //console.log(posiciones_imagenes[i]);
            nu=nu+1;
          }
          else
          {
            nu_valido=nu;
            nu=0;
            return nu_valido;
          }

        }

    //return nu_valido;
  },

  barrido: function()
  {
    console.log('valores');
    for (var i = 0; i < aa.length; i++)
    {
      
      console.log(aa[i]);
    }
  },

  evaluar: function()
  {
    //Aqui pasa al juego
    //console.log('Pulsado');
    //this.getPosition(1);
    this.barrido();
    var style = { font: "30px Arial", fill: "#FE000C", align: "center" };
    //var text = game.add.text(game.world.centerY - 250 , game.world.centerY + 250, "FELICIDADES HAS GANADO!!!", style);

    if(this.verificarImagenes())
    {
      var NickName = "";
      var estrellas = "";
      if(window.localStorage)
      {
        localStorage.setItem("Estrellas", "3");
        estrellas = localStorage.getItem("Estrellas");
        console.log(estrellas);
        NickName = localStorage.getItem("NickName");
      }
      else
      {
        console.log("No se puede");
        throw new Error('Tu Browser no soporta LocalStorage!');
      }

      var text = game.add.text(game.world.centerY - 250 , game.world.centerY + 250, "FELICIDADES HAS GANADO!!!", style); 

      $.ajax({
        method: "GET",
        url: "http://localhost:8000/api/jugador/" + NickName + "/" + parseInt(estrellas),
        dataType: "json",
        success: function(data){
          var info = data;
          text.anchor.y = 0.5;
          console.log(info.data);
          console.log(info.estrellas);
          game.state.add('manos_primer_nivel', manos_primer_nivel);
          game.state.start('manos_primer_nivel');
        }
      }); 

    }
    else {
      //sacar el numero de aciertos y redireccionar al escenario

      var text = game.add.text(game.world.centerY - 250 , game.world.centerY + 250, "VUELVE A INTENTARLO!!!", style);

    }
    //console.log(this.changeImages(1));

    //console.log('Pulsado');

    //console.log(group.length);
    //se agrega el evaluar

  },

  verificarImagenes: function()
  {
    //console.log('verificarImagenes validando...');
   // console.log('VALORES ARREGLO');
    var cc=8;
    for (var j = 0; j < aa.length; j++)
    {
      cc=cc+1;
     // console.log(aa[j]);
      if(aa[j] != cc)
      {
        return false;
      }
    }
    cc=0;
    return true;
  },

  changePosition: function(pos1, pos2, img1, img2)
  {
      aa[pos1] = img2;
      aa[pos2] = img1;
      this.barrido();
  },
  getRandomArray: function(min,max){
     A= [];
    while(max>= min) A.push(max--)
    A.sort(function(){return .5- Math.random()});
    return A;
  },

  fillImages11:function(ip)
  {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      group = game.add.group();

      group.inputEnableChildren = true;
    
      cn="imagen"+ip;
      contador=contador+1;
      console.log('VALOR CONTADOR');
      console.log(contador1);
      console.log(cn);
      console.log(xx);
      console.log(yy);
      if(contador==5)
      {
        xx=80;
        yy=384;
      }

      /*cn = game.add.sprite(xx, yy, cn);
      cn.inputEnabled = true;
      cn.input.enableDrag();
      cn.width = 200;
      cn.height = 280;*/



      valor_division = window.screen.width / 8;
    console.log('val');

    console.log(valor_division);
   // contador1=contador1+1;
    valor_division=(valor_division * contador2);
    console.log(contador1);
    console.log('valor division');
    console.log(valor_division);
  contador2=contador2+1;
       switch (ip)
       {
        case 9:
        console.log('entro0');
        console.log(contador);
          
          imagen9 = group.create(valor_division,200, cn,0);
          imagen9.width = 160;
          imagen9.height = 250;
          imagen9.inputEnabled = true;
          imagen9.input.enableDrag();
          imagen9.events.onDragStart.add(this.onDragStart, this);
          imagen9.events.onDragStop.add(this.onDragStop, this);
          break;
        case 10:
        console.log(contador);
        console.log('entro1');
        //posiciones_imagenes[1]=contador;
          imagen10 = group.create(valor_division,200, cn,1);
          imagen10.width = 160;
          imagen10.height = 250;          
          imagen10.inputEnabled = true;
          imagen10.input.enableDrag();
          imagen10.events.onDragStart.add(this.onDragStart, this);
          imagen10.events.onDragStop.add(this.onDragStop, this);
          break;

        default:

      }

      xx=xx+300;

  },


  onDown: function(sprite, pointer) {

      result = "Down " + sprite.key;
      console.log('down', sprite.key);

  },

  onDragStart: function(sprite, pointer) {

      result = "Dragging " + sprite.key;
      posImagenInX = sprite.x;
      posImagenInY = sprite.y;
      console.log(result);
  },

  onDragStop: function(sprite, pointer) {

      result = sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y;
      console.log(result);
      var posFinalX = sprite.x;
      var posFinalY = sprite.y;
      switch(sprite.key)
      {
        //VALIDACION IMAGEN 2
        case "imagen9":

        //IMAGEN 1
        if(this.checkOverlap(imagen10, sprite))
        {
          console.log("colision x con y, imagen 1");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen10.x;
          sprite.y = imagen10.y;

          imagen10.x = posImagenInX;
          imagen10.y = posImagenInY;

          pos1 = this.getPosition(9);
          pos2 = this.getPosition(10);
          console.log('posiciones_imagenes');
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 9, 10);

        }
       
        else {
          console.log("regreso");
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }

        break;

        case "imagen10":
        //IMAGEN 0
        if(this.checkOverlap(imagen9, sprite))
        {
          console.log("colision x con y, imagen 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen9.x;
          sprite.y = imagen9.y;

          imagen9.x = posImagenInX;
          imagen9.y = posImagenInY;

          pos1 = this.getPosition(10);
          pos2 = this.getPosition(9);
          console.log('posiciones_imagenes');
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 10, 9);

        }
       
        else {
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }

        break;

        
      }
  },

  render: function() {
      var result = '';
      game.debug.text(result, 10, 20);

  },

  checkOverlap: function(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
  },



  update: function()
  {
    if(this.checkOverlap(imagen9, imagen10))
    {
      console.log("true");
    }
  },



};
