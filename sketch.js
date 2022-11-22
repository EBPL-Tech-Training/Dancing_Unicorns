// Falling rectangles
// Change the code: 
// size of the rectangle
//change the color of the background
// chnage the color of the rectangle
//notice the functions 
// try to use parameters in your function 


// declare global variables

let y =0;
let r =20; 


// happens once
// Draws the canvas

function setup() {
  createCanvas(10, 10);
 
  
   
   
  }
//repeats forever
// the function drawRect() and move() are called and repeat //forever
function draw() {
   background(151,191,221);
// Call functions
  drawRect();
  
  move();
  
}


//Define functions
// function move(), makes the rectagles move vertically (y axis)


function move(){
 
  x= x + random(-1, 2);
  y = y + random(-1, 2);
   
}

//function drawRect() the rectangles are drawn at different x and y possiiton until they are accros the width of the canvas: i < width
// is increaed by 80 pixels each time the for loop runs. 

function drawRect() {
  stroke(255);
  fill(200, 120);
  x=0;

 for (let i=0; i<width ; i++){
  rect(x, y, r, r);
   // second rectangle has to be different from the first rectangle, we add 25 to the x and subract 30 pixels to the y. 
  rect(x+25, y-30, r,r);
   
  x= x+80;
  
 }
}

