//creating all the components of the game
var thanos, spaceStone, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8;




function preload(){
    thanosImg = loadImage("thanos.png");
    backImg = loadImage("backdrop.png");
    spaceImg = loadImage("space.png");
    thorImg = loadImage("thor.png");
    lokiImg = loadImage("loki.png");
    dieSound = loadSound("dying.mp3");
    winImg = loadImage("win.png");
    

}
function setup(){

    createCanvas(400,400);
    thanos = createSprite(190, 400, 20, 20);
    thanos.addImage(thanosImg);
    thanos.scale = 0.6;
    spaceStone = createSprite(202, 20, 20, 20);
    spaceStone.addImage(spaceImg);
    spaceStone.scale = 0.33;
    
    

    obstacle3 = createSprite(0, 174, 8, 200);
    obstacle3.addImage(thorImg);
    obstacle3.scale = 0.5;
    obstacle3.velocityX = 3;
    obstacle4 = createSprite(400, 174, 8, 200);
    obstacle4.addImage(lokiImg);
    obstacle4.scale = 0.5;
    obstacle4.velocityX = 3;

    obstacle5=createSprite(0, 300, 350, 10);
    obstacle5.shapeColor = 'red';
    obstacle6=createSprite(400, 300, 350, 10);
    obstacle6.shapeColor = 'red';
    obstacle7=createSprite(0, 40, 350, 10);
    obstacle7.shapeColor = 'red';
    obstacle8=createSprite(400, 40, 350, 10);
    obstacle8.shapeColor = 'red';
    
    winSign = createSprite(200,200,400,400);
    winSign.addImage(winImg);
    winSign.scale = 1.6;
    winSign.visible = false;
    //making the scoreboard
    
    //playing the background music
    //playSound( "sound://category_background/progression.mp3");

}

function draw() {
 background(backImg);
 //placing the info at bottom left corner
 
 
 
 
edges = createEdgeSprites();
 
 //making the components bounce off each other
 thanos.bounceOff(edges);
 thanos.bounceOff(obstacle5);
 thanos.bounceOff(obstacle6);
 thanos.bounceOff(obstacle7);
 thanos.bounceOff(obstacle8);
 
 //making the obstacles bounce off the edges
 obstacle3.bounceOff(edges);
 obstacle4.bounceOff(edges);
 
 if(keyDown(RIGHT_ARROW)){
   thanos.x = thanos.x+6;
   
 }
 
 if(keyDown(LEFT_ARROW)){
 thanos.x = thanos.x-6;
 
 }
 
 if(keyDown(UP_ARROW)){
   thanos.y = thanos.y-6;
   
 }
 
 if(keyDown(DOWN_ARROW)){
   thanos.y = thanos.y+6;
   
 }
 //increasing the score
 if(thanos.isTouching(obstacle3) || thanos.isTouching(obstacle4))
  {
  thanos.x = 190;
  thanos.y = 400;
  dieSound.play();
  
   
 }

 if(thanos.isTouching(spaceStone)){
  thanos.velocityX = 0;
  thanos.velocityY = 0;

  obstacle3.velocityX=0;
  obstacle3.velocityY=0;

  obstacle4.velocityX=0;
  obstacle4.velocityY=0;



  winSign.visible = true;
}
 
 
 drawSprites();
 
  
}
