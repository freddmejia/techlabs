var group;
var imagen0;
var imagen1;
var posImagenInX;
var posImagenInY;
var pruebaJuego = {

  preload: function () {
    game.load.image('imagen0','img/dientes/1.png');
  	game.load.image('imagen1','img/dientes/2.png');
    game.load.image('imagen2','img/dientes/3.png');
    game.load.image('imagen3','img/dientes/4.png');
    game.load.image('imagen4','img/dientes/5.png');
    game.load.image('imagen5','img/dientes/6.png');
    game.load.image('imagen6','img/dientes/7.png');
    game.load.image('imagen7','img/dientes/8.png');
  },

  create: function() {
      //game.add.sprite(0, 0, 'grid');
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      group = game.add.group();

      group.inputEnableChildren = true;

      valor_division = window.screen.width / 8;
      imagen0 = group.create((valor_division * 0), 100, 'imagen0',1);

      //  Enable input and allow for dragging
      imagen0.inputEnabled = true;
      imagen0.input.enableDrag();
      imagen0.events.onDragStart.add(this.onDragStart, this);
      imagen0.events.onDragStop.add(this.onDragStop, this);

      imagen1 = group.create((valor_division * 1), 100, 'imagen1',2);

      imagen1.inputEnabled = true;
      imagen1.input.enableDrag();
      imagen1.events.onDragStart.add(this.onDragStart, this);
      imagen1.events.onDragStop.add(this.onDragStop, this);

      imagen2 = group.create((valor_division * 2), 100, 'imagen2',3);

      imagen2.inputEnabled = true;
      imagen2.input.enableDrag();
      imagen2.events.onDragStart.add(this.onDragStart, this);
      imagen2.events.onDragStop.add(this.onDragStop, this);

      imagen3 = group.create((valor_division * 3), 100, 'imagen3',4);

      imagen3.inputEnabled = true;
      imagen3.input.enableDrag();
      imagen3.events.onDragStart.add(this.onDragStart, this);
      imagen3.events.onDragStop.add(this.onDragStop, this);

      imagen4 = group.create((valor_division * 4), 100, 'imagen4',5);

      imagen4.inputEnabled = true;
      imagen4.input.enableDrag();
      imagen4.events.onDragStart.add(this.onDragStart, this);
      imagen4.events.onDragStop.add(this.onDragStop, this);

      imagen5 = group.create((valor_division * 5), 100, 'imagen5',6);

      imagen5.inputEnabled = true;
      imagen5.input.enableDrag();
      imagen5.events.onDragStart.add(this.onDragStart, this);
      imagen5.events.onDragStop.add(this.onDragStop, this);

      imagen6 = group.create((valor_division * 6), 100, 'imagen6',7);

      imagen6.inputEnabled = true;
      imagen6.input.enableDrag();
      imagen6.events.onDragStart.add(this.onDragStart, this);
      imagen6.events.onDragStop.add(this.onDragStop, this);

      imagen7 = group.create((valor_division * 7), 100, 'imagen7',8);

      imagen7.inputEnabled = true;
      imagen7.input.enableDrag();
      imagen7.events.onDragStart.add(this.onDragStart, this);
      imagen7.events.onDragStop.add(this.onDragStop, this);
      //group.onChildInputDown.add(this.onDown, this);
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
        case "imagen0":
        if(this.checkOverlap(imagen1, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen1.x;
          sprite.y = imagen1.y;

          imagen1.x = posImagenInX;
          imagen1.y = posImagenInY;


        }
        else if(this.checkOverlap(imagen2, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen2.x;
          sprite.y = imagen2.y;

          imagen2.x = posImagenInX;
          imagen2.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen3, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen3.x;
          sprite.y = imagen3.y;

          imagen3.x = posImagenInX;
          imagen3.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen5, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen5.x;
          sprite.y = imagen5.y;

          imagen5.x = posImagenInX;
          imagen5.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen6, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen6.x;
          sprite.y = imagen6.y;

          imagen6.x = posImagenInX;
          imagen6.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen7, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen7.x;
          sprite.y = imagen7.y;

          imagen7.x = posImagenInX;
          imagen7.y = posImagenInY;
        }
        else {
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }
        break;

        case "imagen1":
        if(this.checkOverlap(imagen0, sprite)) {
          console.log("colision y con x");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Inicial " + sprite.x + " : " + sprite.y);
          sprite.x = imagen0.x;
          sprite.y = imagen0.y;

          imagen0.x = posImagenInX;
          imagen0.y = posImagenInY;

        }
        else if(this.checkOverlap(imagen2, sprite))
        {
          console.log("colision y con x");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Inicial " + sprite.x + " : " + sprite.y);
          sprite.x = imagen2.x;
          sprite.y = imagen2.y;

          imagen2.x = posImagenInX;
          imagen2.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen3, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen3.x;
          sprite.y = imagen3.y;

          imagen3.x = posImagenInX;
          imagen3.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen5, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen5.x;
          sprite.y = imagen5.y;

          imagen5.x = posImagenInX;
          imagen5.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen6, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen6.x;
          sprite.y = imagen6.y;

          imagen6.x = posImagenInX;
          imagen6.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen7, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen7.x;
          sprite.y = imagen7.y;

          imagen7.x = posImagenInX;
          imagen7.y = posImagenInY;
        }
        else {
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }
        break;

        case "imagen2":
        if(this.checkOverlap(imagen0, sprite)) {
          console.log("colision y con x");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Inicial " + sprite.x + " : " + sprite.y);
          sprite.x = imagen0.x;
          sprite.y = imagen0.y;

          imagen0.x = posImagenInX;
          imagen0.y = posImagenInY;

        }
        else if(this.checkOverlap(imagen1, sprite))
        {
          console.log("colision y con x");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Inicial " + sprite.x + " : " + sprite.y);
          sprite.x = imagen1.x;
          sprite.y = imagen1.y;

          imagen1.x = posImagenInX;
          imagen1.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen3, sprite))
        {
          console.log("colision y con x");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Inicial " + sprite.x + " : " + sprite.y);
          sprite.x = imagen3.x;
          sprite.y = imagen3.y;

          imagen3.x = posImagenInX;
          imagen3.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen4, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen4.x;
          sprite.y = imagen4.y;

          imagen4.x = posImagenInX;
          imagen4.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen5, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen5.x;
          sprite.y = imagen5.y;

          imagen5.x = posImagenInX;
          imagen5.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen6, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen6.x;
          sprite.y = imagen6.y;

          imagen6.x = posImagenInX;
          imagen6.y = posImagenInY;
        }
        else if(this.checkOverlap(imagen7, sprite))
        {
          console.log("colision 1 con 0");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen7.x;
          sprite.y = imagen7.y;

          imagen7.x = posImagenInX;
          imagen7.y = posImagenInY;
        }
        else {
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }
        break;

        case "imagen3":

        break;

        case "imagen4":
        break;

        case "imagen5":
        break;

        case "imagen6":
        break;

        case "imagen7":
        break;

      }
  },

  render: function() {
      var result = 'Drag a sprite';
      game.debug.text(result, 10, 20);

  },

  checkOverlap: function(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
  },

}
