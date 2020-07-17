var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200, 200, 50, 50);
  gameObject2 = createSprite(400, 200, 50, 50);
  gameObject1.velocityX = 5;
  gameObject2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
//ACCEPT ARGUMENTS (passing arguments through function)

bounceoff(gameObject1,gameObject2);

  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  else {
    gameObject2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}



/*
ARGUMENTS v/s PARAMETERS

Arguments -- real objects/values, given inside sketch.js
Parameters -- imaginary objects/values, non existent, PLACEHOLDERS for arguments


*/