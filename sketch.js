
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

	bob1 = new Bob(140, 200, 30);
	bob2 = new Bob(200, 200, 30);
	bob3 = new Bob(260, 200, 30);
	bob4 = new Bob(320, 200, 30);
	bob5 = new Bob(380, 200, 30);

	//roof = new Roof(700, height, 1200, 20);


	Engine.run(engine);

	roof = new Roof(200,50,500,30);

	rope1 = new Rope(bob1.body, {x:140 ,y:50});
	rope2 = new Rope(bob2.body, {x:200 ,y:50});
	rope3 = new Rope(bob3.body, {x:260 ,y:50});
  rope4 = new Rope(bob4.body, {x:320 ,y:50});
  rope5 = new Rope(bob5.body, {x:380 ,y:50});



}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode = UP_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-40, y:-50});
  }
}

