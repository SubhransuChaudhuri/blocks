const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1, ground2,  block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var rock;
var launch;

function preload()
{

}

function setup() {
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

ground1 = new stand(400, 690, 800, 20);
ground2 = new stand(400, 200, 800, 20);


//Create the Bodies Here.


    rock = new stone(10, 500, 10, 10);
launch = new launcher(rock.body, {x:10, y:500});

block1 = new blocks(27,29,29,20);
block2 = new blocks(27,29,29,20);
block3 = new blocks(27,29,29,20);
block4 = new blocks(27,29,29,20);
block5 = new blocks(27,29,29,20);
block6 = new blocks(27,29,29,20);
block7 = new blocks(27,29,29,20);
block8 = new blocks(27,29,29,20);
block9 = new blocks(27,29,29,20);
block9 = new blocks(27,29,29,20);
block10 = new blocks(27,29,29,20);
block11 = new blocks(27,29,29,20);
block12 = new blocks(27,29,29,20);
block13 = new blocks(27,29,29,20);
block14 = new blocks(27,29,29,20);
block15 = new blocks(27,29,29,20);
block16 = new blocks(27,29,29,20);
block17 = new blocks(27,29,29,20);
block18 = new blocks(27,29,29,20);
block19 = new blocks(27,29,29,20);
block20 = new blocks(27,29,29,20);
block21 = new blocks(27,29,29,20);
block23 = new blocks(27,29,29,20);
block24 = new blocks(27,29,29,20);
block25 = new blocks(27,29,29,20);

Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rock.display();

launch.display();

ground1.display();
ground2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();

  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
launch.fly();
}
