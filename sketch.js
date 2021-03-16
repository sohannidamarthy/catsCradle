var box1;
var ball1,ball2,ball3,ball4,ball5;
var wire1,wire2,wire3,wire4,wire5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1= new box(400,350,300,20);
	ball1= new ball(400,450,20,20)
	wire1= new wire(ball1.body,{x:400,y:350})
	ball2= new ball(300,450,20,20)
	wire2= new wire(ball2.body,{x:300,y:350})
	ball3= new ball(500,450,20,20)
	wire3= new wire(ball3.body,{x:500,y:350})
	ball4= new ball(450,450,20,20)
	wire4= new wire(ball4.body,{x:450,y:350})
	ball5= new ball(350,450,20,20)
	wire5= new wire(ball5.body,{x:350,y:350})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  box1.display()
  ball1.display()
  wire1.display()
  ball2.display()
  wire2.display()
  ball3.display()
  wire3.display()
  ball4.display()
  wire4.display()
  ball5.display()
  wire5.display()
  
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball3.body,ball3.body.position,{x:-100,y:0})
	}
}


