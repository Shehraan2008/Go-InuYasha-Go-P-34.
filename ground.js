class Ground {
  constructor(x, y, w, h) {
    let options = {
      restitution: 1,
      friction: 3,
      chamfer: 0,
      isStatic: true,
    };
    this.body = Bodies.rectangle(x + 800, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }
  show() {
    let pos = this.body.position;
    fill(46, 43, 68);
    noStroke();
    rect(pos.x - 800, pos.y, this.w, this.h);
  }
}
