//console.log("hello word!");
let ball;
let net;
let playerLeft, playerRigt;
function setup() {

  createCanvas(windowWidth, windowHeight-5);
  playerLeft = new Paddle(30, windowHeight/2);
  playerRigt = new Paddle(windowWidth-60, windowHeight/2);
  ball = new Ball();
  net = new Net();
}


function draw() {

  background(0);
  net.display();
  ball.move();
  ball.display();
  playerLeft.display()
  playerRigt.display();
  Movement(playerLeft, playerRigt);
  //checkForGoal();
  //console.log(ball.xMove);
  //console.log(ball.yMove);
  
}

function checkForGoal(params) {
  if ( (ball.x +ball.radius) >+ windowWidth) {
    //console.log("scored");
    return true;
  }
}

function Movement(player1, player2){

  if (keyIsDown(38)) {
    player1.moveUp();
    //player2.moveUp();
    console.log("Up");
  }
  if (keyIsDown(40)) {
    player1.moveDown();
    //player2.moveDown();
    console.log("Down")
  }

  if (keyIsDown(87)) {
    //console.log("leftgsvshggdvbdf");
    player2.moveUp();
  }
  if (keyIsDown(83)) {
    //console.log("leftgsvshggdvbdf");
    player2.moveDown();
  }

 
  
 
 

  
}



