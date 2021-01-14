class Block {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0.8,
      friction: 3,
      chamfer: 0,
      density: 0.2,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }
  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke(255);
    strokeWeight(0.5);
    fill(59, 149, 246);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
