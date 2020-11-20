class Particle
{
	constructor(x,y,r)
	{
		var options={
			//isStatic:false,
			restitution:0.3,
			//friction:0.5,
			//density:1.2

			
			}
		
		this.r=r
        this.body=Bodies.circle(x, y, this.r, options)
        this.color=color(random(0,225),random(0,225),random(0,225))
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
            var angle=this.body.angle;
			push()
			translate(pos.x, pos.y);
			rotate(angle);
			ellipseMode(RADIUS)
			strokeWeight(3);
			fill(this.color);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
