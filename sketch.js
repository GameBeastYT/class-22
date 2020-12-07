const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
ground_options={
  isStatic:true
}
ball_options={
  restitution:1.0
}
ground=Bodies.rectangle(200,375,50,50,ground_options);
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
World.add(world,ground);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  drawSprites();
}