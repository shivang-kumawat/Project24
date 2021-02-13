class Rubber{
    construct(x,y,width,height){
    var options = {
        'restitution':0.3,
        'friction':5,
        'density':4
    }
    this.body = Bodies.rectangle(x,y,width,height ,options);
    this.width = width;
    this.height = height;
    
    World.add(world,this.body);
    }
    
    display(){
    
    var pos = this.body.position;
   
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTRE);
    fill("black");
    rect(0 ,0 ,this.width ,this.height);
    pop();
    
    }
  };