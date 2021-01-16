class Ball {
  constructor(x, y, width, height, angle) {
    var options = {
      density: 0.04,
      frictionAir: 0.005,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
    this.width = width;
    this.height = height;
    this.image = loadImage("sword.png");
  }

  display() {
    let angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);

    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
