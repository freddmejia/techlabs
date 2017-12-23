
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
var xx=980;
var yy=84;
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
var juego_manos = {
  preload: function()
  {
    console.log('clase nueva');
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  	game.scale.pageAlignHorizontally = true;
  	game.scale.pageAlignVertically = true;
  	game.scale.setScreenSize(true);

  	game.load.image('fondo','img/fondo.jpg');

    imagen1=game.load.image('imagen1','img/dientes/2.png');
  	imagen0=game.load.image('imagen0','img/dientes/1.png');
  	
  	imagen2=game.load.image('imagen2','img/dientes/3.png');
  	imagen3=game.load.image('imagen3','img/dientes/4.png');
  	imagen4=game.load.image('imagen4','img/dientes/5.png');
  	imagen5=game.load.image('imagen5','img/dientes/6.png');
  	imagen6=game.load.image('imagen6','img/dientes/7.png');
  	imagen7=game.load.image('imagen7','img/dientes/8.png');

  	//cargar la imagen
  	group=game.add.group();
  	group.enableBody = true;
  },

  create: function()
  {
    fondo=game.add.sprite(0,0,'fondo');
  	fondo.width = screen.width;
  	fondo.height =  screen.height;
    //console.log("random "+Math.floor(Math.random()*3));
    //  console.log("random "+Math.floor(Math.random() * 7));
    aa=this.getRandomArray(0, 7);
    for (var i = 0; i <aa.length; i++) {

      this.fillImages11(aa[i]);

      //console.log(aa[i]);
    }
  //  alert(this.getRandomArray(0, 7));
  },
  getRandomArray: function(min,max){
     A= [];
    while(max>= min) A.push(max--)
    A.sort(function(){return .5- Math.random()});
    return A;
  },

  fillImages11:function(i)
  {
      cn="imagen"+i;
      //console.log(cn.trim());

      contador=contador+1;
      if(contador==5)
      {
        xx=980;
        yy=384;
      }
      cn= game.add.sprite(xx, yy, cn);
      cn.width = 200;
      cn.height = 280;
      xx=xx-300;
      console.log(xx+"  "+yy);
      


      /*if(i==0)
        {
        console.log('entro0');
          imagen0= game.add.sprite(game.world.centerX - 600, game.world.centerY - 300, cn);
          imagen0.width = 200;
          imagen0.height = 280;
           ancho=game.world.centerX - 600;
           largo=game.world.centerY - 300;
           console.log(ancho +" "+ largo);
          //game.add.tween(temp_imagen0).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
          }
        if(i==1)
        {
        console.log('entro1');
          imagen1 = game.add.sprite(game.world.centerX - 300, game.world.centerY - 300, cn);
          imagen1.width = 200;
          imagen1.height = 280;
            ancho=game.world.centerX - 300;
           largo=game.world.centerY - 300;
           console.log(ancho +" "+ largo);
          }
        if(i==2)
        {
        console.log('entro2');
          imagen2= game.add.sprite(game.world.centerX, game.world.centerY - 300, cn);
          imagen2.width = 200;
          imagen2.height = 280;
            ancho=game.world.centerX ;
           largo=game.world.centerY - 300;
           console.log(ancho +" "+ largo);        
          }
        if(i==3)
        {
        console.log('entro3');
          imagen3= game.add.sprite(game.world.centerX + 300, game.world.centerY - 300, cn);
          imagen3.width = 200;
          imagen3.height = 280;
            ancho=game.world.centerX + 300;
           largo=game.world.centerY - 300;
           console.log(ancho +" "+ largo);
          }
        if(i==4)
        {
        console.log('entro4');
          imagen4= game.add.sprite(game.world.centerX - 600, game.world.centerY,  cn);
          imagen4.width = 200;
          imagen4.height = 280;
            ancho=game.world.centerX - 600;
           largo=game.world.centerY ;
           console.log(ancho +" "+ largo);
          }
         if(i==5)
        {
        console.log('entro5');
          imagen5= game.add.sprite(game.world.centerX - 300, game.world.centerY,  cn);
          imagen5.width = 200;
          imagen5.height = 280;
            ancho=game.world.centerX - 300;
           largo=game.world.centerY ;
           console.log(ancho +" "+ largo);
          } 

         if(i==6)
        {
        
          imagen6= game.add.sprite(game.world.centerX, game.world.centerY,  cn);
          imagen6.width = 200;
          imagen6.height = 280;
            ancho=game.world.centerX;
           largo=game.world.centerY ;
           console.log(ancho +" "+ largo);
          }

        if(i==7)
        {
        console.log('entro7');
          imagen7= game.add.sprite(game.world.centerX + 300, game.world.centerY,  cn);
          imagen7.width = 200;
          imagen7.height = 280;
            ancho=game.world.centerX + 300;
           largo=game.world.centerY ;
           console.log(ancho +" "+ largo);
        }*/
  },
    fillImages: function(i)
  
  {
      //alert(i);
      cn="imagen"+i;
      console.log(cn.trim());
      switch (i) {
        case 0:
        console.log('entro0');
          imagen0= game.add.sprite(game.world.centerX - 600, game.world.centerY - 300, cn);
          imagen0.width = 200;
          imagen0.height = 280;
          //game.add.tween(temp_imagen0).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
          break;
        case 1:
        console.log('entro1');
          imagen1 = game.add.sprite(game.world.centerX - 300, game.world.centerY - 300, cn);
          imagen1.width = 200;
          imagen1.height = 280;
          break;
        case 2:
        console.log('entro2');
          imagen2= game.add.sprite(game.world.centerX, game.world.centerY - 300, cn);
          imagen2.width = 200;
          imagen2.height = 280;
          break;
        case 3:
        console.log('entro3');
          imagen3= game.add.sprite(game.world.centerX + 300, game.world.centerY - 300, cn);
          imagen3.width = 200;
          imagen3.height = 280;
          break;
        case 4:
        console.log('entro4');
          imagen4= game.add.sprite(game.world.centerX - 600, game.world.centerY,  cn);
          imagen4.width = 200;
          imagen4.height = 280;
          break;
        case 5:
        console.log('entro5');
          imagen5= game.add.sprite(game.world.centerX - 300, game.world.centerY,  cn);
          imagen5.width = 200;
          imagen5.height = 280;
          break;
        case 6:
        console.log('entro6');
          imagen6= game.add.sprite(game.world.centerX, game.world.centerY,  cn);
          imagen6.width = 200;
          imagen6.height = 280;
          break;
        case 7:
        console.log('entro7');
          imagen7= game.add.sprite(game.world.centerX + 300, game.world.centerY,  cn);
          imagen7.width = 200;
          imagen7.height = 280;
          break;
        default:

      
    }
  },
};
