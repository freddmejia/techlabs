
//Nivel de lavados de Manos


var fondo;
var derecha;
var izquierda;
var button1;
var button2;
var imagen4;
var imagen5;
var imagen6;
var imagen7;


var group;
var con=0;
var text=0;
var timer=0;
var emitter;
var n=0;
var cn="";
var contador1_sn=3;
var contador11_sn=2;
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
var aaa_sn=[];
var pos1 = 0;
var pos2 = 0;
var jugar;
var reload;
var dientes_segundo_nivel_juego = {
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
 imagen4;
 imagen5;
 imagen6;
 imagen7;


 group;
 con=0;
 text=0;
 timer=0;
 emitter;
 n=0;
 cn="";
 contador1_sn=3;
 contador11_sn=2;
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
 aaa_sn=[];
 pos1 = 0;
 pos2 = 0;
 jugar;


    console.log('clase nueva');
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize(true);

    game.load.image('fondo','img/fondo.jpg');

    game.load.image('imagen4','img/manos/5.png');
    game.load.image('imagen5','img/manos/6.png');
    game.load.image('imagen6','img/manos/7.png');
    game.load.image('imagen7','img/manos/8.png');
 
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
    aaa_sn=this.getRandomArray(4, 7);
    for (var i = 0; i < aaa_sn.length; i++) {

      //this.fillImages11(aa[i]);
      //se ingresa los nuevos valores
      //posiciones_imagenes[i]=aa[i];
      this.fillImages11(aaa_sn[i]);
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
    game.state.start('dientes_segundo_nivel');
  },

  getPosition: function(numero)
  {
        var nu=0,nu_valido=0;
        for (var i = 0; i < aaa_sn.length; i++)
        {
          //console.log('vaa');
          //console.log(aa[i]);
          if(aaa_sn[i]!=numero)
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
    for (var i = 0; i < aaa_sn.length; i++)
    {
      
      console.log(aaa_sn[i]);
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
    //this.verificarImagenes();

    if(this.verificarImagenes())
    {
      var text = game.add.text(game.world.centerY - 250 , game.world.centerY + 250, "FELICIDADES HAS GANADO!!!", style);

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
      
      $.ajax({
        method: "GET",
        url: "http://localhost:8000/api/jugador/" + NickName + "/" + parseInt(estrellas),
        dataType: "json",
        success: function(data){
          var info = data;
          text.anchor.y = 0.5;
          console.log(info.data);
          console.log(info.estrellas);
          game.state.add('herramientas_lavar_boca', herramientas_lavar_boca);
          game.state.start('herramientas_lavar_boca');
        }
      });  

    text.anchor.y = 0.5;
         /* game.state.add('dientes_segundo_nivel', dientes_segundo_nivel);
      game.state.start('dientes_segundo_nivel');*/
    }
    else {

      var text = game.add.text(game.world.centerY - 250 , game.world.centerY + 250, "VUELVE A INTENTARLO!!!", style);

    }


  },

  verificarImagenes: function()
  {
    //console.log('verificarImagenes validando...');
    var ccc=3;
    console.log('VALORES verificarImagenes');
    for(var j = 0; j < aaa_sn.length; j++)
    {
      ccc=ccc+1;
      console.log(aaa_sn[j]);
      if(aaa_sn[j] != ccc)
      {
        return false;
      }
    }
    ccc=0;
    return true;
  },

  changePosition: function(pos1, pos2, img1, img2)
  {
      aaa_sn[pos1] = img2;
      aaa_sn[pos2] = img1;
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
      contador1_sn=contador1_sn+1;
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
    valor_division=(valor_division * contador11_sn);
  contador11_sn=contador11_sn+1;
       switch (i)
       {
        case 4:
        console.log('entro4');
        //posiciones_imagenes[4]=contador;
          imagen4 = group.create(valor_division,200, cn,4);
          imagen4.width = 160;
          imagen4.height = 250;          
          imagen4.inputEnabled = true;
          imagen4.input.enableDrag();
          imagen4.events.onDragStart.add(this.onDragStart, this);
          imagen4.events.onDragStop.add(this.onDragStop, this);
          break;
        case 5:
        console.log('entro5');
        //posiciones_imagenes[5]=contador;
          imagen5 = group.create(valor_division,200, cn,5);
          imagen5.width = 160;
          imagen5.height = 250;          
          imagen5.inputEnabled = true;
          imagen5.input.enableDrag();
          imagen5.events.onDragStart.add(this.onDragStart, this);
          imagen5.events.onDragStop.add(this.onDragStop, this);
          break;
        case 6:
        console.log('entro6');
        //posiciones_imagenes[6]=contador;
          imagen6 = group.create(valor_division,200, cn,6);
          imagen6.width = 160;
          imagen6.height = 250;          
          imagen6.inputEnabled = true;
          imagen6.input.enableDrag();
          imagen6.events.onDragStart.add(this.onDragStart, this);
          imagen6.events.onDragStop.add(this.onDragStop, this);
          break;
        case 7:
        console.log('entro7');
        //posiciones_imagenes[7]=contador;
          imagen7 = group.create(valor_division,200, cn,7);
          imagen7.width = 160;
          imagen7.height = 250;          
          imagen7.inputEnabled = true;
          imagen7.input.enableDrag();
          imagen7.events.onDragStart.add(this.onDragStart, this);
          imagen7.events.onDragStop.add(this.onDragStop, this);
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
        case "imagen4":


        //IMAGEN 4
         if(this.checkOverlap(imagen3, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen3.x;
          sprite.y = imagen3.y;

          imagen3.x = posImagenInX;
          imagen3.y = posImagenInY;

          pos1 = this.getPosition(4);
          pos2 = this.getPosition(3);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 4, 3);

        }

        //IMAGEN 5
        else if(this.checkOverlap(imagen5, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen5.x;
          sprite.y = imagen5.y;

          imagen5.x = posImagenInX;
          imagen5.y = posImagenInY;

          pos1 = this.getPosition(4);
          pos2 = this.getPosition(5);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 4, 5);

        }
        //IMAGEN 6
        else if(this.checkOverlap(imagen6, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen6.x;
          sprite.y = imagen6.y;

          imagen6.x = posImagenInX;
          imagen6.y = posImagenInY;

          pos1 = this.getPosition(4);
          pos2 = this.getPosition(6);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 4, 6);

        }
        //IMAGEN 7
        else if(this.checkOverlap(imagen7, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen7.x;
          sprite.y = imagen7.y;

          imagen7.x = posImagenInX;
          imagen7.y = posImagenInY;

          pos1 = this.getPosition(4);
          pos2 = this.getPosition(7);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 4, 7);

        }

        else {
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }

        break;


        case "imagen5":



        //IMAGEN 4
         if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;

          pos1 = this.getPosition(5);
          pos2 = this.getPosition(4);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 5, 4);

        }


        //IMAGEN 6
        else if(this.checkOverlap(imagen6, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen6.x;
          sprite.y = imagen6.y;

          imagen6.x = posImagenInX;
          imagen6.y = posImagenInY;

          pos1 = this.getPosition(5);
          pos2 = this.getPosition(6);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 5, 6);

        }
        //IMAGEN 7
        else if(this.checkOverlap(imagen7, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen7.x;
          sprite.y = imagen7.y;

          imagen7.x = posImagenInX;
          imagen7.y = posImagenInY;

          pos1 = this.getPosition(5);
          pos2 = this.getPosition(7);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 5, 7);

        }

        else {
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }

        break;

        case "imagen6":

        //IMAGEN 4
         if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;

          pos1 = this.getPosition(6);
          pos2 = this.getPosition(4);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 6, 4);

        }


        //IMAGEN 6
        else if(this.checkOverlap(imagen5, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen5.x;
          sprite.y = imagen5.y;

          imagen5.x = posImagenInX;
          imagen5.y = posImagenInY;

          pos1 = this.getPosition(6);
          pos2 = this.getPosition(5);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 6, 5);

        }
        //IMAGEN 7
        else if(this.checkOverlap(imagen7, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen7.x;
          sprite.y = imagen7.y;

          imagen7.x = posImagenInX;
          imagen7.y = posImagenInY;

          pos1 = this.getPosition(6);
          pos2 = this.getPosition(7);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 6, 7);

        }

        else {
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }

        break;

        case "imagen7":

        //IMAGEN 4
         if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;

          pos1 = this.getPosition(7);
          pos2 = this.getPosition(4);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 7, 4);

        }


        //IMAGEN 6
        else if(this.checkOverlap(imagen6, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen6.x;
          sprite.y = imagen6.y;

          imagen6.x = posImagenInX;
          imagen6.y = posImagenInY;

          pos1 = this.getPosition(7);
          pos2 = this.getPosition(6);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 7, 6);

        }
        //IMAGEN 7
        else if(this.checkOverlap(imagen5, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen5.x;
          sprite.y = imagen5.y;

          imagen5.x = posImagenInX;
          imagen5.y = posImagenInY;

          pos1 = this.getPosition(7);
          pos2 = this.getPosition(5);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 7, 5);

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
