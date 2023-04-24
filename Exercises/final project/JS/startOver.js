var r = 0;
var g = 0;
var b = 0;

function setup() {
    createCanvas(1440, 720);
    
}

function draw(){
    //background using MAP
    r = map(mouseX, 0, 1440, 0, 255);
    g = map(mouseY, 0, 1440, 0, 255);
    b = map(mouseX, 0, 1440, 255, 0);
    background(r,g,b);
    squares(255);

    if (mouseIsPressed ===true) {
        randomStar(255);
        randomStar(0);
        //let starX = random(width);
        //let starY = random(height);
        //ellipse (starX,starY,random(30),random(30));
        //noStroke();
        //fill(0);
        //let starX = random(width);
        //let starY = random(height);
        //ellipse (starX,starY,20,20);
        //fill(255);
        //ellipse (starX,starY,20,20);
    } 

}

function randomStar(color){
    let starX = random(width);
    let starY = random(height);
    noStroke();
    fill(color);
    ellipse (starX,starY,20,20);
}

function squares(color){
    let squareX = random(width);
    let squareY = random(height);
    noStroke();
    fill(color);
    square(squareX,squareY, 20);
}


