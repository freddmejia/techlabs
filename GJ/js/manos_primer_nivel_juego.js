var fondo;
var derecha;
var izquierda;
var button1;
var button2;
var imagen0;
var imagen1;
var imagen2;
var imagen3;


var group;
var con=0;
var text=0;
var timer=0;
var emitter;
var n=0;
var cn="";
var contador1=0;
var contador11=2;
var xx=80;//default 980
var yy=84;//default 84
var       valor_division = 0;

var ancho=0;
var largo=0;
//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
var posiciones1 = [];
var ran=0;
var anterior=0;
var cont=0;
var existe=false;
var aaa=[];
var pos1 = 0;
var pos2 = 0;
var jugar;
var reload;
var manos_primer_nivel_juego = {
  preload: function()
  {
 /*   game.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
    game.load.bitmapFont('shortStack', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.fnt');
*/

 fondo;
 derecha;
 izquierda;
 button1;
 button2;
 imagen0;
 imagen1;
 imagen2;
 imagen3;


 group;
 con=0;
 text=0;
 timer=0;
 emitter;
 n=0;
 cn="";
 contador1=0;
 contador11=2;
 xx=80;//default 980
 yy=84;//default 84
       valor_division = 0;

 ancho=0;
 largo=0;
//Creo estructura de dato que me permitira guardar las posiciones ya llenadas
//Primero las creo vacias
 posiciones1 = [];
 ran=0;
 anterior=0;
 cont=0;
 existe=false;
 aaa=[];
 pos1 = 0;
 pos2 = 0;
 jugar;


    console.log('clase nueva');
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize(true);

    game.load.image('fondo','img/fondo.jpg');

    game.load.image('imagen0','img/dientes/1.png');
    game.load.image('imagen1','img/dientes/2.png');
    game.load.image('imagen2','img/dientes/3.png');
    game.load.image('imagen3','img/dientes/4.png');
 
    game.load.image('jugar',  'img/ok.png');
    game.load.image('Back', 'img/backHome.png');
    game.load.image('reload', 'img/Reload.png');
  },

  create: function()
  {
    fondo=game.add.sprite(0,0,'fondo');
    fondo.width = screen.width;
    fondo.height =  screen.height;
    //cargar la imagen

    //console.log("random "+Math.floor(Math.random()*3));
    //  console.log("random "+Math.floor(Math.random() * 7));
    aaa=this.getRandomArray(0, 3);
    for (var i = 0; i < aaa.length; i++) {

      //this.fillImages11(aa[i]);
      //se ingresa los nuevos valores
      //posiciones_imagenes[i]=aa[i];
      this.fillImages11(aaa[i]);
    }

    this.barrido();
      jugar= game.add.button(600, 500, 'jugar', this.evaluar, this, 1,0,2);
      jugar.width = 100;
      jugar.height = 100;

      reload = game.add.button(700, 500, 'reload', this.recargar, this, 0, 0,0);
      reload.width = 100;
      reload.height = 100;
      
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

  recargar: function()
  {
    game.state.start('manos_primer_nivel');
  },

  getPosition: function(numero)
  {
        var nu=0,nu_valido=0;
        for (var i = 0; i < aaa.length; i++)
        {
          //console.log('vaa');
          //console.log(aa[i]);
          if(aaa[i]!=numero)
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
    console.log('valores barrido');
    for (var i = 0; i < aaa.length; i++)
    {
      
      console.log(aaa[i]);
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
      if(window.sessionStorage)
      {
        sessionStorage.setItem("Estrellas", "3");
        estrellas = sessionStorage.getItem("Estrellas");
        console.log(estrellas);
        NickName = sessionStorage.getItem("NickName");
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
          game.state.add('manos_segundo_nivel', manos_segundo_nivel);
          game.state.start('manos_segundo_nivel');
        }
      }); 
          
    }
    else {
      //sacar el numero de aciertos y redireccionar al escenario
    //game.add.bitmapText(32, 32, 'shortStack', 'This font was generated using the\nfree Littera web site\n\nhttp://kvazars.com/littera/', 32);

   /* var text = game.add.bitmapText(game.world.centerY - 250 , game.world.centerY + 250, 'desyrel', 'VUELVE A INTENTARLO!!!', 64);
    text.anchor.x = 0.5;
    text.anchor.y = 0.5;  */
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
    for(var i = 0; i < aaa.length; i++)
    {
      console.log(aaa[i]);
      if(aaa[i] != i)
      {
        return false;
      }
    }
    return true;
  },

  changePosition: function(pos1, pos2, img1, img2)
  {
      aaa[pos1] = img2;
      aaa[pos2] = img1;
      this.barrido();
  },
  getRandomArray: function(min,max){
     A= [];
    while(max>= min) A.push(max--)
    A.sort(function(){return .5- Math.random()});
    return A;
  },

  fillImages11:function(i)
  {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      group = game.add.group();

      group.inputEnableChildren = true;

      cn="imagen"+i;
      contador1=contador1+1;
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
    valor_division=(valor_division * contador11);
  contador11=contador11+1;
       switch (i)
       {
        case 0:
        console.log('entro0');
        console.log(contador11);
          
          imagen0 = group.create(valor_division,200, cn,0);
          imagen0.width = 160;
          imagen0.height = 250;
          imagen0.inputEnabled = true;
          imagen0.input.enableDrag();
          imagen0.events.onDragStart.add(this.onDragStart, this);
          imagen0.events.onDragStop.add(this.onDragStop, this);
          break;
        case 1:
        console.log(contador11);
        console.log('entro1');
          imagen1 = group.create(valor_division,200, cn,1);
          imagen1.width = 160;
          imagen1.height = 250;          
          imagen1.inputEnabled = true;
          imagen1.input.enableDrag();
          imagen1.events.onDragStart.add(this.onDragStart, this);
          imagen1.events.onDragStop.add(this.onDragStop, this);
          break;
        case 2:
        console.log('entro2');
          imagen2 = group.create(valor_division,200, cn,2);
          imagen2.width = 160;
          imagen2.height = 250;          
          imagen2.inputEnabled = true;
          imagen2.input.enableDrag();
          imagen2.events.onDragStart.add(this.onDragStart, this);
          imagen2.events.onDragStop.add(this.onDragStop, this);
          break;
        case 3:
        console.log('entro3');
          imagen3 = group.create(valor_division,200, cn,3);
          imagen3.width = 160;
          imagen3.height = 250;          
          imagen3.inputEnabled = true;
          imagen3.input.enableDrag();
          imagen3.events.onDragStart.add(this.onDragStart, this);
          imagen3.events.onDragStop.add(this.onDragStop, this);
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
        case "imagen0":

        //IMAGEN 1
        if(this.checkOverlap(imagen1, sprite))
        {
          console.log("colision x con y, imagen 1");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen1.x;
          sprite.y = imagen1.y;

          imagen1.x = posImagenInX;
          imagen1.y = posImagenInY;

          pos1 = this.getPosition(0);
          pos2 = this.getPosition(1);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 0, 1);

        }
        //IMAGEN 3
        else if(this.checkOverlap(imagen3, sprite))
        {
          console.log("colision x con y, imagen 3");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen3.x;
          sprite.y = imagen3.y;

          imagen3.x = posImagenInX;
          imagen3.y = posImagenInY;

          pos1 = this.getPosition(0);
          pos2 = this.getPosition(3);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 0, 3);

        }
        //IMAGEN 2
        else if(this.checkOverlap(imagen2, sprite))
        {
          console.log("colision x con y, imagen 2");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen2.x;
          sprite.y = imagen2.y;

          imagen2.x = posImagenInX;
          imagen2.y = posImagenInY;

          pos1 = this.getPosition(0);
          pos2 = this.getPosition(2);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 0, 2);

        }


        
        else {
          console.log("regreso");
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }

        break;

        case "imagen1":
        //IMAGEN 0
        if(this.checkOverlap(imagen0, sprite))
        {
          console.log("colision x con y, imagen 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen0.x;
          sprite.y = imagen0.y;

          imagen0.x = posImagenInX;
          imagen0.y = posImagenInY;

          pos1 = this.getPosition(1);
          pos2 = this.getPosition(0);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 1, 0);

        }
        //IMAGEN 2
        else if(this.checkOverlap(imagen2, sprite))
        {
          console.log("colision x con y, imagen 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen2.x;
          sprite.y = imagen2.y;

          imagen2.x = posImagenInX;
          imagen2.y = posImagenInY;

          pos1 = this.getPosition(1);
          pos2 = this.getPosition(2);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 1, 2);

        }
        //IMAGEN 3
        else if(this.checkOverlap(imagen3, sprite))
        {
          console.log("colision x con y, imagen 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen3.x;
          sprite.y = imagen3.y;

          imagen3.x = posImagenInX;
          imagen3.y = posImagenInY;

          pos1 = this.getPosition(1);
          pos2 = this.getPosition(3);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 1, 3);

        }

       
        else {
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }

        break;

        case "imagen2":
        //IMAGEN 0
        if(this.checkOverlap(imagen0, sprite))
        {
          console.log("colision x con y, imagen 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen0.x;
          sprite.y = imagen0.y;

          imagen0.x = posImagenInX;
          imagen0.y = posImagenInY;

          pos1 = this.getPosition(2);
          pos2 = this.getPosition(0);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 2, 0);

        }
        //IMAGEN 1
        else if(this.checkOverlap(imagen1, sprite))
        {
          console.log("colision x con y, imagen 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen1.x;
          sprite.y = imagen1.y;

          imagen1.x = posImagenInX;
          imagen1.y = posImagenInY;

          pos1 = this.getPosition(2);
          pos2 = this.getPosition(1);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 2, 1);

        }
        //IMAGEN 3
        else if(this.checkOverlap(imagen3, sprite))
        {
          console.log("colision x con y, imagen 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen3.x;
          sprite.y = imagen3.y;

          imagen3.x = posImagenInX;
          imagen3.y = posImagenInY;

          pos1 = this.getPosition(2);
          pos2 = this.getPosition(3);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 2, 3);

        }

      
        else {
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }

        break;

        case "imagen3":
        //IMAGEN 0
        if(this.checkOverlap(imagen0, sprite))
        {
          console.log("colision x con y, imagen 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen0.x;
          sprite.y = imagen0.y;

          imagen0.x = posImagenInX;
          imagen0.y = posImagenInY;

          pos1 = this.getPosition(3);
          pos2 = this.getPosition(0);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 3, 0);

        }
        //IMAGEN 1
        else if(this.checkOverlap(imagen1, sprite))
        {
          console.log("colision x con y, imagen 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen1.x;
          sprite.y = imagen1.y;

          imagen1.x = posImagenInX;
          imagen1.y = posImagenInY;

          pos1 = this.getPosition(3);
          pos2 = this.getPosition(1);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 3, 1);

        }

        //IMAGEN 2
        else if(this.checkOverlap(imagen2, sprite))
        {
          console.log("colision x con y, imagen 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen2.x;
          sprite.y = imagen2.y;

          imagen2.x = posImagenInX;
          imagen2.y = posImagenInY;

          pos1 = this.getPosition(3);
          pos2 = this.getPosition(2);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 3, 2);

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
    if(this.checkOverlap(imagen0, imagen1))
    {
      console.log("true");
    }
  },



};
