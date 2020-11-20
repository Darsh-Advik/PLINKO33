const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=240;
var ground;
var engine, world;
var score = 0;
var particle;
var turns = 0;
var gamestate = "play";

function preload()
{
	
}

function setup() {
	createCanvas(450, 700);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(225,690,450,20)
	
  for(var k = 0; k <= width; k=k+90){
	divisions.push(new Divisions(k,height-divisionHeight/2,10,200));

}

for (var j = 40; j<=width; j=j+50)
{
	plinkos.push(new Plinko(j,75))
}
for (var j = 15; j<=width-10; j=j+50)
{
	plinkos.push(new Plinko(j,175))
}

for (var j = 40; j<=width; j=j+50)
{
	plinkos.push(new Plinko(j,275))
}
for (var j = 15; j<=width-10; j=j+50)
{
	plinkos.push(new Plinko(j,375))
}
  
}


function draw() {
  rectMode(CENTER);
  background("225");
  fill(0);
  textSize(50);
  text("SCORE : "+ score,100,150);
  textSize(20);
  text("TURNS : "+ turns,100,350); 
  text("500",390,550);
  text("100",300,550);
  text("200",210,550);
  text("500",30,550);
  text("100",120,550);

  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
     
	plinkos[i].display();
	
  }

  /*if(frameCount%30===0){
	particles.push(new Particle(random(width/2-100, width/2+120), 10,10));
	
  }


  for (var j = 0; j< particles.length; j++){
	  particles[j].display();
  }*/

if(gamestate==="end"){

textSize(50);
text("GAMEOVER!",200,200);

}

if (particle!=null){

particle.display();

if(particle.body.position.y>500){

if(particle.body.position.x<150){

score=score+500;
particle=null;

if(turns>=5){

gamestate="end";

}

}
else if(particle.body.position.x<300&&particle.body.position.x>150){

score=score=100;

particle=null;

if(turns>=5){

gamestate="end";                                        

}

}
else if(particle.body.position.x<450&&particle.body.position.x>300){

  score=score=200;
  
  particle=null;
  
  if(turns>=5){
  
  gamestate="end";
  
  }
}

}

}



  for (var k = 0; k< divisions.length; k++){
	divisions[k].display();
}

ground.display(); 
}

function keyPressed(x){

if (gamestate==="play"){

turns++

particle = new Particle(mouseX,100,10,10);

}

}










