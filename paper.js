class Paper{
    constructor(a,b,radius){
        
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2 
        }
        
        this.a =a;
        this.b=b;
        this.radius = radius;
        this.body = Bodies.circle(this.a,this.b,this.radius,options);
        World.add(world,this.body);

        
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);

        
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop()
    }
}