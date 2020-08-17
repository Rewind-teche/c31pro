const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var distanceHeight=200;

function setup() {
  createCanvas(480,580);
  engine = Engine.create();
  world = engine.world;
  newParticle();
  for(var i=0;i<=width;i=i+80)
  {
     divisions.push(new Divisions(i,height-distanceHeight/2,5,distanceHeight))
  }
  for(var j = 40; j <= width; j = j+50)
  {
    plinkos.push( new Plinko(j,75,10));
  }
  for(var j = 15; j <= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,150,10))
  }
  for(var j = 40; j <= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,225,10))
  }
  for(var j = 15; j <= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,300,10))
  }
 
  ground = new Ground(width/2,570,480,10)
  Engine.run(engine);
}


function draw() {
  
  background(0); 
  Engine.update(engine); 
  if(frameCount % 90 === 0)
  {
    newParticle();
  }
  
  for(var i=0;i<divisions.length;i++)
  {
    divisions[i].display();
  }
  for(var k = 0; k < particles.length; k++)
  {
    particles[k].display();
  }
  for(var j = 0; j < plinkos.length ; j++)
  {
     plinkos[j].display()
  }
  
  ground.display();
  drawSprites();
}
 
function newParticle()
{
  particle = new Particle(random(width/2-10,width/2+10),10,10) 
  particles.push(particle)
}  

