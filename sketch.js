var canvas;
var music;
var redRect,blueRect,greenRect,pinkRect;
var edges;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500,400);

    //create 4 different surfaces
 redRect = createSprite(449, 390, 120, 20);
 redRect.shapeColor = "red";
 
 blueRect = createSprite(315,390,120,20);
 blueRect.shapeColor = "blue";

 greenRect = createSprite(180,390,120,20);
 greenRect.shapeColor = "green";
 
 pinkRect = createSprite(45,390,120,20);
 pinkRect.shapeColor = "pink";
 

    //create box sprite and give velocity

    box = createSprite(250,100,20,20);
    box.velocityX = 4;
    box.velocityY = 10;

}

function draw() {
    background(0);

    //create edgeSprite
 edges = createEdgeSprites();
 box.bounceOff(edges);
 
    //add condition to check if box touching surface and make it box

 if(box.isTouching(redRect) && box.bounceOff(redRect)){
 box.shapeColor  = "red";
 music.play();
 }
 if(box.isTouching(blueRect) && box.bounceOff(blueRect)){
 box.shapeColor  = "blue";
 
 }

 if(box.isTouching(greenRect) && box.bounceOff(greenRect)){
 box.shapeColor  = "green";
 box.velocityX = 0;
 box.velocityY = 0;
 music.stop();
  }

  if(box.isTouching(pinkRect) && box.bounceOff(pinkRect)){
   box.shapeColor  = "pink";
 }

 drawSprites();

   
}
 

 