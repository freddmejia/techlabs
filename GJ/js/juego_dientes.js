
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

var group;
var con=0;
var text=0;
var timer=0;
var emitter;
var n=0;
var cn="";
var contador=0;
var contador1=0;
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
var juego_dientes = {
  preload: function()
  {
    game.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
    game.load.bitmapFont('shortStack', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.fnt');

    console.log('clase nueva');
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize(true);

    game.load.image('fondo','img/fondo.jpg');

    game.load.image('imagen0','img/manos/1.png');
    game.load.image('imagen1','img/manos/2.png');
    game.load.image('imagen2','img/manos/3.png');
    game.load.image('imagen3','img/manos/4.png');
    game.load.image('imagen4','img/manos/5.png');
    game.load.image('imagen5','img/manos/6.png');
    game.load.image('imagen6','img/manos/7.png');
    game.load.image('imagen7','img/manos/8.png');
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
    aa=this.getRandomArray(0, 7);
    for (var i = 0; i < aa.length; i++) {

      //this.fillImages11(aa[i]);
      //se ingresa los nuevos valores
      //posiciones_imagenes[i]=aa[i];
      this.fillImages11(aa[i]);
    }

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
      var text = game.add.text(game.world.centerY - 250 , game.world.centerY + 250, "FELICIDADES HAS GANADO!!!", style);
   // game.add.bitmapText(32, 32, 'shortStack', 'This font was generated using the\nfree Littera web site\n\nhttp://kvazars.com/littera/', 32);

    //var text = game.add.bitmapText(game.world.centerY - 250 , game.world.centerY + 250, 'desyrel', 'FELICIDADES HAS GANADO!!!', 64);
    //text.anchor.x = 0.5;
    text.anchor.y = 0.5;
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
    for(var i = 0; i < aa.length; i++)
    {
      console.log(aa[i]);
      if(aa[i] != i)
      {
        return false;
      }
    }
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

  fillImages11:function(i)
  {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      group = game.add.group();

      group.inputEnableChildren = true;

      cn="imagen"+i;
      contador=contador+1;
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
    valor_division=(valor_division * contador1), 100
  contador1=contador1+1;
       switch (i)
       {
        case 0:
        console.log('entro0');
        console.log(contador);
          
          imagen0 = group.create(valor_division,200, cn,0);
          imagen0.width = 160;
          imagen0.height = 250;
          imagen0.inputEnabled = true;
          imagen0.input.enableDrag();
          imagen0.events.onDragStart.add(this.onDragStart, this);
          imagen0.events.onDragStop.add(this.onDragStop, this);
          break;
        case 1:
        console.log(contador);
        console.log('entro1');
        //posiciones_imagenes[1]=contador;
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
        //posiciones_imagenes[2]=contador;
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
        //posiciones_imagenes[3]=contador;
          imagen3 = group.create(valor_division,200, cn,3);
          imagen3.width = 160;
          imagen3.height = 250;          
          imagen3.inputEnabled = true;
          imagen3.input.enableDrag();
          imagen3.events.onDragStart.add(this.onDragStart, this);
          imagen3.events.onDragStop.add(this.onDragStop, this);
          break;
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


     /* this.game.physics.startSystem(Phaser.Physics.ARCADE);
      group = game.add.group();

      group.inputEnableChildren = true;

      imagen0 = group.create(32, 100, 'imagen0',1);
      imagen0.events.onDragStart.add(this.onDragStart, this);
      imagen0.events.onDragStop.add(this.onDragStop, this);

      imagen1 = group.create(300, 200, 'imagen1',2);
      imagen1.events.onDragStart.add(this.onDragStart, this);
      imagen1.events.onDragStop.add(this.onDragStop, this);

      imagen2 = group.create(300, 200, 'imagen2',3);
      imagen2.events.onDragStart.add(this.onDragStart, this);
      imagen2.events.onDragStop.add(this.onDragStop, this);*/



      //console.log()
      //console.log(cn);
      //console.log(xx+"  "+yy);
  },

    fillImages: function(i)
  {
      //alert(i);
      cn="imagen"+i;
      console.log(cn);

      switch (i) {
        case 0:
        console.log('entro0');
          imagen0= game.add.image(game.world.centerX - 600, game.world.centerY - 300, cn);
          imagen0.inputEnabled = true;
          imagen0.input.enableDrag();
          imagen0.width = 200;
          imagen0.height = 280;
          //game.add.tween(temp_imagen0).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
          break;
        case 1:
        console.log('entro1');
          imagen1 = game.add.image(game.world.centerX - 300, game.world.centerY - 300, cn);
          imagen1.inputEnabled = true;
          imagen1.input.enableDrag();
          imagen1.width = 200;
          imagen1.height = 280;
          break;
        case 2:
        console.log('entro2');
          imagen2= game.add.image(game.world.centerX, game.world.centerY - 300, cn);
          imagen2.inputEnabled = true;
          imagen2.input.enableDrag();
          imagen2.width = 200;
          imagen2.height = 280;
          break;
        case 3:
        console.log('entro3');
          imagen3= game.add.image(game.world.centerX + 300, game.world.centerY - 300, cn);
          imagen3.inputEnabled = true;
          imagen3.input.enableDrag();
          imagen3.width = 200;
          imagen3.height = 280;
          break;
        case 4:
        console.log('entro4');
          imagen4= game.add.image(game.world.centerX - 600, game.world.centerY,  cn);
          imagen4.inputEnabled = true;
          imagen4.input.enableDrag();
          imagen4.width = 200;
          imagen4.height = 280;
          break;
        case 5:
        console.log('entro5');
          imagen5= game.add.image(game.world.centerX - 300, game.world.centerY,  cn);
          imagen5.inputEnabled = true;
          imagen5.input.enableDrag();
          imagen5.width = 200;
          imagen5.height = 280;
          break;
        case 6:
        console.log('entro6');
          imagen6= game.add.image(game.world.centerX, game.world.centerY,  cn);
          imagen6.inputEnabled = true;
          imagen6.input.enableDrag();
          imagen6.width = 200;
          imagen6.height = 280;
          break;
        case 7:
        console.log('entro7');
          imagen7= game.add.image(game.world.centerX + 300, game.world.centerY,  cn);
          imagen7.inputEnabled = true;
          imagen7.input.enableDrag();
          imagen7.width = 200;
          imagen7.height = 280;
          break;
        default:

    }
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

          pos1 = juego_manos.getPosition(0);
          pos2 = juego_manos.getPosition(1);
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

          pos1 = juego_manos.getPosition(0);
          pos2 = juego_manos.getPosition(3);
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

          pos1 = juego_manos.getPosition(0);
          pos2 = juego_manos.getPosition(2);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 0, 2);

        }

        //IMAGEN 4
        else if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;

          pos1 = juego_manos.getPosition(0);
          pos2 = juego_manos.getPosition(4);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 0, 4);

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

          pos1 = juego_manos.getPosition(0);
          pos2 = juego_manos.getPosition(5);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 0, 5);

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

          pos1 = juego_manos.getPosition(0);
          pos2 = juego_manos.getPosition(6);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 0, 6);

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

          pos1 = juego_manos.getPosition(0);
          pos2 = juego_manos.getPosition(7);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 0, 7);
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

          pos1 = juego_manos.getPosition(1);
          pos2 = juego_manos.getPosition(0);
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

          pos1 = juego_manos.getPosition(1);
          pos2 = juego_manos.getPosition(2);
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

          pos1 = juego_manos.getPosition(1);
          pos2 = juego_manos.getPosition(3);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 1, 3);

        }

        //IMAGEN 4
        else if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;

          pos1 = juego_manos.getPosition(1);
          pos2 = juego_manos.getPosition(4);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 1, 4);

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

          pos1 = juego_manos.getPosition(1);
          pos2 = juego_manos.getPosition(5);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 1, 5);

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

          pos1 = juego_manos.getPosition(1);
          pos2 = juego_manos.getPosition(6);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 1, 6);

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

          pos1 = juego_manos.getPosition(1);
          pos2 = juego_manos.getPosition(7);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 1, 7);

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

          pos1 = juego_manos.getPosition(2);
          pos2 = juego_manos.getPosition(0);
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

          pos1 = juego_manos.getPosition(2);
          pos2 = juego_manos.getPosition(1);
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

          pos1 = juego_manos.getPosition(2);
          pos2 = juego_manos.getPosition(3);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 2, 3);

        }

        //IMAGEN 4
        else if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;

          pos1 = juego_manos.getPosition(2);
          pos2 = juego_manos.getPosition(4);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 2, 4);

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

          pos1 = juego_manos.getPosition(2);
          pos2 = juego_manos.getPosition(5);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 2, 5);

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

          pos1 = juego_manos.getPosition(2);
          pos2 = juego_manos.getPosition(6);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 2, 6);

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

          pos1 = juego_manos.getPosition(2);
          pos2 = juego_manos.getPosition(7);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 2, 7);

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

          pos1 = juego_manos.getPosition(3);
          pos2 = juego_manos.getPosition(0);
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

          pos1 = juego_manos.getPosition(3);
          pos2 = juego_manos.getPosition(1);
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

          pos1 = juego_manos.getPosition(3);
          pos2 = juego_manos.getPosition(2);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 3, 2);

        }

        //IMAGEN 4
        else if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;

          pos1 = juego_manos.getPosition(3);
          pos2 = juego_manos.getPosition(4);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 3, 4);

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

          pos1 = juego_manos.getPosition(3);
          pos2 = juego_manos.getPosition(5);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 3, 5);

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

          pos1 = juego_manos.getPosition(3);
          pos2 = juego_manos.getPosition(6);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 3, 6);

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

          pos1 = juego_manos.getPosition(3);
          pos2 = juego_manos.getPosition(7);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 3, 7);

        }

        else {
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }

        break;


        case "imagen4":
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

          pos1 = juego_manos.getPosition(4);
          pos2 = juego_manos.getPosition(0);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 4, 0);

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

          pos1 = juego_manos.getPosition(4);
          pos2 = juego_manos.getPosition(1);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 4, 1);

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

          pos1 = juego_manos.getPosition(4);
          pos2 = juego_manos.getPosition(2);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 4, 2);

        }

        //IMAGEN 4
        else if(this.checkOverlap(imagen3, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen3.x;
          sprite.y = imagen3.y;

          imagen3.x = posImagenInX;
          imagen3.y = posImagenInY;

          pos1 = juego_manos.getPosition(4);
          pos2 = juego_manos.getPosition(3);
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

          pos1 = juego_manos.getPosition(4);
          pos2 = juego_manos.getPosition(5);
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

          pos1 = juego_manos.getPosition(4);
          pos2 = juego_manos.getPosition(6);
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

          pos1 = juego_manos.getPosition(4);
          pos2 = juego_manos.getPosition(7);
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

          pos1 = juego_manos.getPosition(5);
          pos2 = juego_manos.getPosition(0);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 5, 0);

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

          pos1 = juego_manos.getPosition(5);
          pos2 = juego_manos.getPosition(1);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 5, 1);

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

          pos1 = juego_manos.getPosition(5);
          pos2 = juego_manos.getPosition(2);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 5, 2);

        }

        //IMAGEN 4
        else if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;

          pos1 = juego_manos.getPosition(5);
          pos2 = juego_manos.getPosition(4);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 5, 4);

        }

        //IMAGEN 5
        else if(this.checkOverlap(imagen3, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen3.x;
          sprite.y = imagen3.y;

          imagen3.x = posImagenInX;
          imagen3.y = posImagenInY;

          pos1 = juego_manos.getPosition(5);
          pos2 = juego_manos.getPosition(3);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 5, 3);

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

          pos1 = juego_manos.getPosition(5);
          pos2 = juego_manos.getPosition(6);
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

          pos1 = juego_manos.getPosition(5);
          pos2 = juego_manos.getPosition(7);
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

          pos1 = juego_manos.getPosition(6);
          pos2 = juego_manos.getPosition(0);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 6, 0);

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

          pos1 = juego_manos.getPosition(6);
          pos2 = juego_manos.getPosition(1);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 6, 1);

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

          pos1 = juego_manos.getPosition(6);
          pos2 = juego_manos.getPosition(2);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 6, 2);

        }

        //IMAGEN 4
        else if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;

          pos1 = juego_manos.getPosition(6);
          pos2 = juego_manos.getPosition(4);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 6, 4);

        }

        //IMAGEN 5
        else if(this.checkOverlap(imagen3, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen3.x;
          sprite.y = imagen3.y;

          imagen3.x = posImagenInX;
          imagen3.y = posImagenInY;

          pos1 = juego_manos.getPosition(6);
          pos2 = juego_manos.getPosition(3);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 6, 3);

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

          pos1 = juego_manos.getPosition(6);
          pos2 = juego_manos.getPosition(5);
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

          pos1 = juego_manos.getPosition(6);
          pos2 = juego_manos.getPosition(7);
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

          pos1 = juego_manos.getPosition(7);
          pos2 = juego_manos.getPosition(0);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 7, 0);

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

          pos1 = juego_manos.getPosition(7);
          pos2 = juego_manos.getPosition(1);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 7, 1);

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

          pos1 = juego_manos.getPosition(7);
          pos2 = juego_manos.getPosition(2);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 7, 2);

        }

        //IMAGEN 4
        else if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;

          pos1 = juego_manos.getPosition(7);
          pos2 = juego_manos.getPosition(4);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 7, 4);

        }

        //IMAGEN 5
        else if(this.checkOverlap(imagen3, sprite))
        {
          console.log("colision x con y, imagen 4");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen3.x;
          sprite.y = imagen3.y;

          imagen3.x = posImagenInX;
          imagen3.y = posImagenInY;

          pos1 = juego_manos.getPosition(7);
          pos2 = juego_manos.getPosition(3);
          console.log(pos1);
          console.log(pos2);

          this.changePosition(pos1, pos2, 7, 3);

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

          pos1 = juego_manos.getPosition(7);
          pos2 = juego_manos.getPosition(6);
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

          pos1 = juego_manos.getPosition(7);
          pos2 = juego_manos.getPosition(5);
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
