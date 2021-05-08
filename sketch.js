  var cat,cat1,cat2,cat3,cat4
  var mouse,mouse1,mouse2,mouse3
  var bg;
function preload() {
    //load the images here

    cat1= loadAnimation("images/cat1.png");
    cat2= loadAnimation("images/cat2.png","images/cat3.png");
    cat3= loadAnimation("images/cat4.png");
    mouse1= loadAnimation("images/mouse1.png");
    mouse2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3= loadAnimation("images/mouse4.png");
    bg= loadImage("images/garden.png");

}   

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat = createSprite(800,600,50,50);
 mouse = createSprite(200,600,50,50);
 cat.scale= 0.2;
 mouse.scale= 0.15;

 cat.addAnimation("cat1",cat1);
 mouse.addAnimation("mouse1",mouse1);

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
  if(cat.x-mouse.x<= cat.width/2+mouse.width/2){
      cat.addAnimation("cat3",cat3);
      cat.changeAnimation("cat3");
      mouse.addAnimation("mouse3",mouse3);
      mouse.changeAnimation("mouse3");
      cat.velocityX=0;

  }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode=== LEFT_ARROW){
    cat.velocityX= -5;
    cat.addAnimation("cat2",cat2);
    cat.changeAnimation("cat2");
    mouse.addAnimation("mouse2",mouse2);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouse2");
}

}
