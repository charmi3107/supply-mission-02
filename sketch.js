var helicopterIMAGE, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMAGE=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMAGE)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,70);
	groundSprite.shapeColor=color("GREEN")

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 70 , {isStatic:true} );
 	World.add(world, ground);

	 box2 = new Box(480,650,23,150,"red");
	 box3 = new Box(290,650,23,150,"red");
	 box1 = new Box(380,620,200,20,"red");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("LIGHTBLUE");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
   
	Matter.Body.setStatic(packageBody,false);
}	
 
Engine.update(engine);
    
  }




