class Polygon
{
	constructor()
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
            }
            
        this.polygon = loadImage("polygon.png");
		this.body=Bodies.circle(160,400,32, options);
		World.add(world, this.body);

	}
	display()
	{
		var polypos = this.body.position
		var angle = this.body.angle

			push();
			imageMode(CENTER);
			translate(polypos.x,polypos.y);
			rotate(angle);
            image(this.polygon,0,0,70,70);
            pop();
			
	}

}
