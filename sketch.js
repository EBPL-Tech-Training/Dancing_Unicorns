/*Music Visualization
Falling rectangles
 */


// declare global variables

let y =0;
let r =20; 
// declare a variable to contain the song.
let song;

let amp;
let ampHistory = [];

// audio file is loaded before anything else starts
function preload() {
  song = loadSound('pinkunicorns.mp3');
}


// happens once
// Draws the canvas

function setup() {
  createCanvas(800, 300);
//Draw a slider tool
 slider= createSlider(0,1,0.5,0.01);
  slider.position(10, 200);
// Song Visualization Set up
// Play the song file
  song.play();
//Start an amplitude object (Song Volume)
 amp = new p5.Amplitude();
  
   
   
  }
//repeats forever
// the function drawRect() and move() are called and repeat 

//forever
function draw() {
   background(151,191,221);

//Control the Volume of the song with the slider
  song.setVolume(slider.value());

// Collect the Volume ( amplitude data) between 0 and 1. 
  let ampValue = amp.getLevel();
// Add amplitude data into an Array
  ampHistory.push(ampValue);

  stroke(255);
  noFill();
//Start connecting all the points dwarn by Vertex.
  beginShape();
/*Go thorough the Array and plot the points of the array. Draw the line graph*/
  for (let i =0;i< ampHistory.length ;i++){
    vertex(i,ampHistory[i]*500);
  }
  endShape();
//Stop connecting the dots
 
//Keep the points moving to the left.
 if (ampHistory.length > width){
    ampHistory.splice(0,1);
  }
  
// Call functions
  drawRect();
  
  move();
  
}


//Define functions
// function move(), makes the rectagles move vertically (y axis)

// y depends on the values of the ampHistory array.
function move(){
  for (let i =0;i< ampHistory.length ;i++){
    y = ampHistory[i]*500;
  }
   
  x= x + random(-1, 2);
  y = y + random(-1, 2);
   
}

/*function drawRect() the rectangles are drawn at different x and y positions until they are across the width of the canvas: i < width
x position is increased by 80 pixels each time the for loop runs. */ 

function drawRect() {
  stroke(255);
  fill(200, 120);
  x=0;
// y position will be drawn based on the ampHistory Array, the volume *500. 

 for (let i=0; i<width ; i++){
  rect(x, y, r, r);
   // second rectangle has to be different from the first rectangle, 
//we add 25 to the x and subract 30 pixels to the y. 
  rect(x+25, y-30, r,r);
   
  x= x+80;
  
 }
}
