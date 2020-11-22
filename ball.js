class Ball {
    constructor(x, y) {
      this.xMove =Math.random() * (8 - 4) + 4; //Math.random() * (max - min) + min;
      this.yMove = Math.random() * (5 - 2) + 2;
      this.x = windowWidth/2;
      this.y = windowHeight/2;
      this.radius = 50;
      console.log('circle created')
    }
    
    move() {
      
      if ( (this.x +this.radius || this.x -this.radius<=0) >+ windowWidth) {
        console.log("scored");
      }

      this.x+= this.xMove;
      this.y+= this.yMove;
    }
  
    display() {
    
      noFill();
      stroke(255);
      strokeWeight(5);
      ellipse(this.x, this.y, this.radius);
    }

  
  }