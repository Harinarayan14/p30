class Stone{
    constructor(x,y,radius) {
        var options = {
            'restitution':1.2,
            'friction':1.0,
            'density':1.0,
            frictionAir :0.01
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("stone1.png");
        this.image1 = loadImage("stone2.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var h;
        push();
        translate(this.body.position.x, this.body.position.y);
        console.log(this.body.mass)
        rotate(angle);
        if(tries1%2===0){
        Matter.Body.setMass(this.body,1500);
        imageMode(CENTER);
        image(this.image, 0, 0,45,45);
        }
        else{
          
        Matter.Body.setMass(this.body,3000);
        imageMode(CENTER);
        image(this.image1, 0, 0,45,45);
        }
        pop();
      }
  }