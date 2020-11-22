class Ball {
    constructor(x, y) {
      
      this.direction = Math.random() < 0.5;
      
      this.xMove =Math.round(Math.random() * (8 - 4) + 4); //Math.random() * (max - min) + min;
      this.yMove = Math.round(Math.random() * (4 - 3) + 3);
      this.x = windowWidth/2;
      this.y = windowHeight/2;
      this.diamater = 50;
      console.log('circle created')
      
    }
    
    move() {

      if ( (this.x +(this.diamater/2) >+ windowWidth) || (this.x -(this.diamater/2)<=0) ) {
        console.log("scored");
        if(!this.direction){
          this.direction = true;
        }else{this.direction = false;}
      }

      //Move left when the direction is true 
      if (!this.direction) {
        this.x-= this.xMove;
        this.y-= this.yMove;

       //Move right when the direction is true 
      }else{
        this.x+= this.xMove;
        this.y+= this.yMove;
        
      }
      //console.log(this.x)
    }
  
    display() {
    
      noFill();
      stroke(255);
      strokeWeight(5);
      ellipse(this.x, this.y, this.diamater);
    }

  
  }