
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var canvas
 var ground , groundImage; 
 var invisibleground
 var boy , boyImage;
var up_arrow
var coronavirus , coronavirusimg , coronavirusGroup
var score = 0
var jumpSound ;



  function preload()
  {

    groundImage = loadImage("ground.png");
    boyImage = loadAnimation("boy1.png","boy2.png","boy3.png");
    coronavirusimg = loadImage("coronavirus.png")
    jumpSound = loadSound("jump.mp3")

  

}

function setup() {
  
    canvas = createCanvas(400,350);
    ground = createSprite(200,150,400,30);
    ground.addImage("ground",groundImage);
    ground.scale = 0.95
     ground.x = ground.width /2;
    ground.velocityX = -3;

    boy = createSprite(90,260,200,200);
    boy.addAnimation("boy",boyImage);
    boy.scale = 0.5
    
     
    

    invisibleground = createSprite(200,340,550,1)
    invisibleground.visible = false


    coronavirusGroup = new Group()
    
    
    
   
 
}

function draw() {
 
    background(0);
    textSize(11)
  fill("#FFFF");

       text("Score:"+score,300,10);
       score = score + Math.round(frameCount/60);
  
    
    boy.collide(invisibleground);
    boy.setCollider("circle",0,0,110);
    boy.debug =  false

   

    




  if (ground.x  <  0){
      ground.x = ground.width/3
  }
   boy.velocityY = boy.velocityY +0.5

  if (keyDown("space")&& boy.y>=200){
      boy.velocityY =-10
  }

if(coronavirusGroup.collide(boy))
{

  coronavirusGroup.destroy
}
  
  
ground.display()
  boy.display()
spawnvirus()
   
    

  

    drawSprites()
 
}



function spawnvirus(){

    if(frameCount % 70===0){
    coronavirus = createSprite(550,300,100,100);
    coronavirus.y = Math.round(random(100,300));
    coronavirus.addImage("coronavirus",coronavirusimg);
    coronavirus.scale = 0.15
    coronavirus.velocityX = -5

    coronavirus.lifetime = 134

    coronavirus.depth = boy.depth;
    boy.depth = boy.depth +=2;

   coronavirusGroup.add(coronavirus);

    }





}