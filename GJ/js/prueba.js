var group;
var imagen0;
var imagen1;
var posImagenInX;
var posImagenInY;
var pruebaJuego = {

  preload: function () {

    game.load.image('imagen0','img/dientes/1.png');
  	game.load.image('imagen1','img/dientes/2.png');

  },

  create: function() {

      //game.add.sprite(0, 0, 'grid');
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      group = game.add.group();

      group.inputEnableChildren = true;

      imagen0 = group.create(32, 100, 'imagen0',1);

      //  Enable input and allow for dragging
      imagen0.inputEnabled = true;
      imagen0.input.enableDrag();
      imagen0.events.onDragStart.add(this.onDragStart, this);
      imagen0.events.onDragStop.add(this.onDragStop, this);

      imagen1 = group.create(300, 200, 'imagen1',2);

      imagen1.inputEnabled = true;
      imagen1.input.enableDrag();
      imagen1.events.onDragStart.add(this.onDragStart, this);
      imagen1.events.onDragStop.add(this.onDragStop, this);

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
      switch(sprite.key)
      {
        case "imagen0":
        if(this.checkOverlap(imagen1, sprite))
        {
          console.log("colision x con y");
          console.log("Posicion Inicial " + posImagenInX + " : " + posImagenInY);
          console.log("Posicion Final" + sprite.x + " : " + sprite.y);
          sprite.x = imagen1.x;
          sprite.y = imagen1.y;
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
        }
        else {
          sprite.x = posImagenInX;
          sprite.y = posImagenInY;
        }
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
