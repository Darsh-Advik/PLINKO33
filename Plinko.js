class Plinko
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			//density:1.2

			
			}
		this.r=10
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
			imageMode(CENTER);
			strokeWeight(3);
			fill(this.color)
			ellipseMode(RADIUS)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
