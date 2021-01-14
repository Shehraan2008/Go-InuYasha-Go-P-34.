// Module Alias
const { Engine, World, Bodies, Body, Constraint, Composites } = Matter;
let world, engine;

// Declaring the Objects
let blocks = [];
let ground1, ground2, ground3, ground4, ball, rope;
let slime, slimeImage, slimeGroup, bg;

// Loading image
function preload(params) {
  slimeImage = loadImage("slime.png");
  bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1200, 600);

  // The Engien and World
  engine = Engine.create();
  world = engine.world;

  // Blocks
  for (let x = 600; x < 900; x += 50) {
    for (let y = 50; y < 500; y += 50) {
      let block = new Block(x, y, 40, 40);
      blocks.push(block);
    }
  }

  // Boundries
  ground1 = new Ground(0, 580, width, 40);

  // Ball
  ball = new Ball(200, 200, 80, 80);

  // Rope
  rope = new Rope(ball.body, { x: 450, y: 250 });

  slimeGroup = createGroup();

  // Engine
  Engine.run(engine);
}

function draw() {
  // Background
  background(bg);

  // Shwoing the Obejcts.
  // ground1.show();

  for (const block of blocks) {
    block.show();
  }

  ball.display();
  rope.display();

  // Instructions
  fill(236, 112, 76);
  textSize(24);
  textFont("VT323");
  text(
    "Drag the Inuyasha's sword to smash the Obstacels and enemies",
    width / 2 - 160,
    140
  );
  // Title
  fill(143, 45, 86);
  textSize(104);
  text("Go Inuyasha! Go!", width / 2 - 300, 100);
  createSlime();
  createBlock();
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  rope.fly();
}
// reseting Mechanism
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(ball.body, { x: 200, y: 250 });
    rope.attach(ball.body);
  }
}

function createSlime(params) {
  if (frameCount % 60 === 0) {
    slime = createSprite(1200, 200, 50, 50);
    slime.y = random(50, 550);
    slime.addImage(slimeImage);
    slime.scale = 0.2;
    slime.velocityX = -5;
    slimeGroup.add(slime);
  }
}

function createBlock(params) {
  if (frameCount % 200 === 0) {
    for (let x = 600; x < 900; x += 50) {
      for (let y = 50; y < 500; y += 50) {
        let block = new Block(x, y, 40, 40);
        blocks.push(block);
      }
    }
  }
}
