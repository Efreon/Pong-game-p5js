class Ball {
    constructor(x, y) {
      this.x = windowWidth/2;
      this.y = windowHeight/2;
      console.log('circle created')
    }
    
    move() {
    
    }
  
    display() {
    
      noFill();
      stroke(255);
      strokeWeight(5);
      ellipse(this.x, this.y, 50);
    }

  
  }