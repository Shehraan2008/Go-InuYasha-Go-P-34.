class Ball {
  constructor(x, y, width, height, angle) {
    var options = {
      density: 0.04,
      frictionAir: 0.005,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    noStroke();
    fill(245, 187, 71);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}
