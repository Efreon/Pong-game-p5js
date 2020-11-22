class Net{
    
    constructor(){
        this.retcX = windowWidth/250;
        this.rectY =windowHeight/25;
        this.xNet = windowWidth/2-(this.retcX/2);
        this.yNet = windowHeight/2-(this.rectY/2);
        console.log('net created')
    }

    display(){
        
        
        let count = 25;

        stroke(255);
        fill(255)

        //draw the net line
        for (let index = 0; index < 12; index++) {
            rect(this.xNet, count, this.retcX, this.rectY);
            count += (this.rectY * 2);
            
        }
        

        
    }
}