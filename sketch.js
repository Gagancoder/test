const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2,ground3,ground4,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(1535, 755);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	

    paper1 = new Paper(200,300);
	
	box1 = new Box(1100,658,150,15);
	box2 = new Box(1185,564,15,170);
	box3 = new Box(1015,564,15,170);
	
	ground1 = new Ground(720,690,1660,30);
	ground2 = new Ground(0,300,30,750);
	ground3 = new Ground(1530,300,30,750);
    ground4 = new Ground(720,0,1660,30);
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	
	

	
	
	ground1.display();
	ground2.display();
	ground3.display();
	ground4.display();
	box3.display();
	box1.display();
	box2.display();
	
	paper1.display();
	image(boximage,1000,477,200,200);
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}