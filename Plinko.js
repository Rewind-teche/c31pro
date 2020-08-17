class Plinko{
    constructor(x,y,radius)
    {
        var options =
       {
        'isStatic':true,
        'restitution':0.8,
        'friction':1.0
        
       }
 
        this.body = Bodies.circle(x, y, radius, options) 
        this.radius =radius
        
        World.add(world,this.body);
    }

display()
{
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight (2)
      stroke ("white")
      fill("green")
      ellipseMode(RADIUS)
      ellipse(0,0,10,10)
      pop();
    }
}