var spaceShip, bomb,  background;
var spaceShipImage, bombImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redBGrp,blueBGrp,greenBGrp,pinkBGrp,bombGrp;
var score=0;
var gameState=0;
function preload(){
  
  backgroundImage = loadImage("imported piskel (9).gif");
  bombImage = loadImage("imported piskel (8).gif");
  spaceShipImage = loadImage("imported piskel (1).gif");
  red_balloonImage = loadImage("imported piskel (2).gif");
  blue_balloonImage = loadImage("imported piskel.gif");
  green_balloonImage = loadImage("imported piskel (3).gif");
  pink_balloonImage = loadImage("imported piskel (4).gif");
  gameOver_Img= loadImage("imported piskel (7).gif");
}



function setup() {
  createCanvas(1280, 600);

  //creating background
  scene = createSprite(1200,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 6;
  
  // creating bow to shoot arrow
  spaceShip = createSprite(380,550,20,50);
  spaceShip.addImage("space",spaceShipImage); 
  spaceShip.addImage("game",gameOver_Img);
  spaceShip.scale = 1;
  redBGrp=new Group();
  blueBGrp=new Group();
  greenBGrp=new Group()
  pinkBGrp=new Group(); 
  bombGrp=new Group();
  finish=createSprite(640,550,1280,50);
  finish.visible=false;
}


function draw() {
 background(0);
 if(gameState==0){

  // moving ground
    scene.velocityX = -3 

    if (scene.x < 100){
      scene.x = 1200;
    }
  
  //moving bow
  spaceShip.x = World.mouseX;
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createBomb();
    
  }
  if (redBGrp.isTouching(finish)||blueBGrp.isTouching(finish)||pinkBGrp.isTouching(finish)||greenBGrp.isTouching(finish)){
   gameState=1
   
  }
  if (redBGrp.isTouching(bombGrp)){
    redBGrp.destroyEach();
    bombGrp.destroyEach();
    score=score+2;
  }
  if (blueBGrp.isTouching(bombGrp)){
    blueBGrp.destroyEach();
    bombGrp.destroyEach();
    score=score+3;
  }
  if (greenBGrp.isTouching(bombGrp)){
    greenBGrp.destroyEach();
    bombGrp.destroyEach();
    score=score+1;
  }
  if (pinkBGrp.isTouching(bombGrp)){
    pinkBGrp.destroyEach();
    bombGrp.destroyEach();
    score=score+4;
  }
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   if (select_balloon == 1) {
     redBalloon();
   } else if (select_balloon == 2) {
    greenBalloon();
 } else if (select_balloon == 3) {
    blueBalloon();
 } else {
    pinkBalloon();
  }
}
  
  }
  if(gameState==1){
    background("black");
   redBGrp.destroyEach();
   blueBGrp.destroyEach();
   greenBGrp.destroyEach();
   pinkBGrp.destroyEach();
   spaceShip.changeImage("game",gameOver_Img);
   spaceShip.x=width/2-100;
   spaceShip.y=height/2-50;
   scene.velocityX=0;
  }
  drawSprites();
  text("Score :"+score,1200,50);
}


// Creating  arrows for bow
 function createBomb() {
  var bomb= createSprite(100, 520, 60, 10);
  bomb.addImage(bombImage);
  bomb.x = 600;
  bomb.x=spaceShip.x;
  bomb.velocityY = -4;
  bomb.lifetime = 500;
  bomb.scale = 0.1;
  bombGrp.add (bomb);
}


function redBalloon() {
  var red = createSprite(Math.round(random( 20,370)),0, 100, 10);
  red.addImage(red_balloonImage);
  red.velocityY = 3;
  red.lifetime = 500;
  red.scale = 1;
  redBGrp.add (red);
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(Math.round(random(20,370)),0, 100, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityY = 3;
  blue.lifetime = 500;
  blue.scale = 1;
  blueBGrp.add (blue);
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(Math.round(random(20,370)),0, 100, 10);
  green.addImage(green_balloonImage);
  green.velocityY = 3;
  green.lifetime = 500;
  green.scale = 1;
  greenBGrp.add (green);
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(Math.round(random(20,370)),0, 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityY = 3;
  pink.lifetime = 500;
  pink.scale = 1.2;
  pinkBGrp.add (pink);
}