
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;
var radius = 50;


function setup() {
  createCanvas(1600, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  groundObj = new Ground(width/2, 670, width, 20);
  leftSide = new Ground(1100, 600, 20, 120);
  rightSide = new Ground(700, 600, 20, 120);

  var ball_options = {
    isStatic:false,
    restitution:0.5,
    friction:0,
    density:1.2
  }
    
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);
  rectMode(CENTER);
  Engine.run(engine);
}

function draw() {
  background(0);
  ellipse(ball.position.x, ball.position.y, radius);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  //drawSprites();
 }

 function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:15,y:-15});
  }  
 }



