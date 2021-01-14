
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ball;
var ground;
var world;


function setup() {
	engine = Engine.create();
	world = engine.world;

	createCanvas(1600, 700);
	rectMode(CENTER);

	dustbin = new DustBin(1200, 650);
	ball = new Ball(200, 450);
	ground = new Ground(800, 670, width, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  dustbin.display();
  ball.display();
  ground.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball.body, ball.body.position, {x:85,y:-85});
    
  	}
}





