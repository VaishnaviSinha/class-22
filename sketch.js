const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world,object;
var ball

function setup() {
  createCanvas(400,400);

engine = Engine.create();
world = engine.world;

var options = {
  isStatic:true
}

object = Bodies.rectangle(200,390,width,40,options)
World.add(world,object)

var ball_options = {
  isStatic:false,
  restitution:1
}

ball = Bodies.circle(200,200,20,ball_options)
World.add(world,ball)
console.log(object.position.x)
}

function draw() {
  background(0);
  Engine.update(engine) 
  rectMode(CENTER) 
  fill("brown")
  rect(object.position.x,object.position.y,width,40)
  fill("white")
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,20)
}