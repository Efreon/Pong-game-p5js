class Paddle{
    //constructor
    constructor(x, y){
        this.x = x;
        this.y = y
        console.log("Paddle created");
        this.sizeX = 15;
        this.sizeY = 90;
        this.color = 255
        this.speed = 5;
    }

    //draw
    display(){
        stroke(this.color);
        fill(this.color);
        rect(this.x, this.y, this.sizeX, this.sizeY);
    }
    


    moveUp(){

        if (this.y>5) {
            this.y -= this.speed
        }
        
    }
    moveDown(){
        if (this.y < (windowHeight - this.sizeY)) {
            this.y += this.speed;
        }
        
    }
      
    //move
    //getinput

}