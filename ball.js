class Ball {
    constructor(x, y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0
          }
          this.body = Bodies.rectangle(x, y,width,height,options)
          this.width = width;
          this.height = height;
          this.image = loadImage("paper.png");
          World.add(world, this.body);
        
        }
        display(){
          var pos =this.body.position;
         // rectMode (CENTER);
          push();
          translate(pos.x, pos.y);
          fill("blue");
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          //rect(0, 0,this.width,this.height);
          pop();
        }
      }     




