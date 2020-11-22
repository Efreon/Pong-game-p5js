class Ball {
    constructor(x, y) {
      this.xMove;
      this.yMove;
      this.x = windowWidth/2;
      this.y = windowHeight/2;
      console.log('circle created')
    }
    
    move() {
      this.x+= this.speed;
      this.y+= this.speed;
    }
  
    display() {
    
      noFill();
      stroke(255);
      strokeWeight(5);
      ellipse(this.x, this.y, 50);
    }

  
  }