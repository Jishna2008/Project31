class Particles{
    constructor(x,y)
    {
     var options=
     {
      'restitution':0.5,
       
     }
     this.r=10;
    this.body=Bodies.circle(x,y,this.r,options);
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    }
    display(){
            var angle =this.body.angle;
            var pos = this.body.position;
            console.log(this.color);
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill(this.color);
            ellipseMode(RADIUS);
            ellipse(0,0,this.r,this.r)
        pop();
     
    }
}