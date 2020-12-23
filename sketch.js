const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground;
var box1
var box2



function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
 box1 = new Box(200,200,80,40)
 box2 = new Box(200,180,80,40)
ground = new Ground(0,360,400,20);
}
function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  box1.display();
  box2.display();
  ground.display();
}