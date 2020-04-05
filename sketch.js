const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;

var door;

var flagPole,flag;

var engine, world;
var leftWall,rightWall,leftWB,rightWB;
var LWB1,LWB2,LWB3;
var RWB1,RWB2,RWB3;
var center,centerWall,centerWB;
var CWB1,CWB2,CWB3;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,340,800,20);

  center = createSprite(400,260,400,140);

  leftWall = createSprite(200, 230, 30, 200);
  rightWall = createSprite(600, 230, 30, 200);
  centerWall = createSprite(400,140,40,100);

  leftWB = createSprite(200,120,60,20);
  rightWB = createSprite(600,120,60,20);
  centerWB = createSprite(400,80,70,20);

  LWB1 = new Spike(175,100);
  LWB2 = new Spike(200,100);
  LWB3 = new Spike(225,100);

  RWB1 = new Spike(625,100);
  RWB2 = new Spike(600,100);
  RWB3 = new Spike(575,100);

  CWB1 = new Spike(370,60);
  CWB2 = new Spike(400,60);
  CWB3 = new Spike(430,60);

  door = createSprite(400,290,40,80);

  flagPole = createSprite(385,40,5,60);
  flag = createSprite(405,25,40,20)
}

function draw() {
  background(230);  

  Engine.update(engine);

  ground.display();

  LWB1.display();
  LWB2.display();
  LWB3.display();

  RWB1.display();
  RWB2.display();
  RWB3.display();

  CWB1.display();
  CWB2.display();
  CWB3.display();

  door.shapeColor = 150;

  flagPole.shapeColor = 160;
  flag.shapeColor = 80;

  drawSprites();
}

class Spike{
  constructor(x,y,width,height){
    var spike_options = {
      isStatic : true
    }

    this.body = Bodies.rectangle(x, y, width, height,spike_options);
    this.width = 10;
    this.height = 20;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    push()
    noStroke();
    rectMode(CENTER);
    fill(129);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
};
