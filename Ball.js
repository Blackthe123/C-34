class Ball{
    constructor(x, y, radius){
        var options={
            restitution:0.2,
            density:1,
            frictionAir:0.005
        }
        this.body=Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius=radius;
    }

    display(){
        fill(0, 255, 255);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
  }
}