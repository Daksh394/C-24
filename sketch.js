var box,box2,box3
var ground
var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box=createSprite(width/2, height-50, 200, 20);
	box.shapeColor=color("red")

	box2=createSprite(300,height-100,20,120);
	box2.shapeColor=color("red")

	box3=createSprite(500,height-100,20,120);
	box3.shapeColor=color("red");

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 World.add(world, box)
	 World.add(world,box2)
	 World.add(world,box3)
	 

	 ball = ellipse(700,700,10,20);
	 World.add(world,ball);
	 var options={
		 isStatic:false,
		 restitution:0.3,
		 friction:0.5,
		 density:1.2
	 }


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  function keyPressed() 
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
	
		
 
}


  




