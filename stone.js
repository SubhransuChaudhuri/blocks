class stone {
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
     this.body = Bodies.circle(x, y, radius/2, options);
     World.add ( world, this.body);
 }
 
 display(){
     var pos =this.body.position;
   
       push();
       translate(pos.x, pos.y);
   
       fill(200,125,150);
       ellipse(0, 0, this.radius, this.radius);
       
       pop();
 
 }
 }
 