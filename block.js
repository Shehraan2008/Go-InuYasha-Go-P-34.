class Block {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0.8,
      friction: 3,
      chamfer: 0,
      density: 0.2,
    };
    this.visibility = 225;
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }
  show() {
    if (this.body.speed < 10) {
      let pos = this.body.position;
      let angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(0.2);
      fill("brown");
      rect(0, 0, this.w, this.h);
      pop();
    } else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 20;
      pop();
    }
  }
}
