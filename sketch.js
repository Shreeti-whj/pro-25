const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paperObject,ground	
var world;

function preload() {
	paper = loadImage("paper.png");
	dustbin= loadImage("dustbingreen.png")
}



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin=new Dustbin(1200,600);
	ball=new Ball(220,400,40);
	ground=new Ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
 
  dustbin.display();
  ball.display();
  ground.display();

  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    
  	}
}



