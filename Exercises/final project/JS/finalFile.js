let planetX;
let planetY;
let planetZ;
let planetSize;

let R;
let G;
let B;

function setup() {
    createCanvas(1440, 720, WEBGL);
    
    //PLANETS
    planetX = []
    planetY = []
    planetZ = []
    planetSize = []

    for (let i = 0; i < 8; i++) {
        planetX.push(random(-600,600));
        planetY.push(random(-250,300));
        planetZ.push(random(0,100));
        planetSize.push(random(20,80));
    }

    //PLANET COLOR
    R = []
    G = []
    B = []

    for (let i = 0; i < 8; i++) {
      R.push(random(37,134));
      G.push(random(31,203));
      B.push(random(71,146));
  }


  }

  function draw(){
    background(0);
   //direction light
    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, -dirX, -dirY, -1);

    noStroke();

    for(let i=0; i<8; i++){
      fill(R[i],G[i],B[i]);
      movePlanets(i);
      translate(planetX[i],planetY[i],planetZ[i]);
      sphere(planetSize[i]);
      //put starting point back to 0,0, so that it doesn't translate based on last spot
      translate(-1*planetX[i],-1*planetY[i],-1*planetZ[i]);
    }

    if (mouseIsPressed ===true) {
      randomStar(255,255);
      randomStar(255, 100);
    }
    
}

function randomStar(color){
  let starX = random(width);
  let starY = random(height);

// translate box
starX = starX - (width/2);
starY = starY - (height/2);

  noStroke();
  fill(color);
  ellipse (starX,starY,20,20);
}

function movePlanets(planetNum){
  if (planetX[planetNum]>720){
    planetX[planetNum] = -720
  } else {
    planetX[planetNum]++;
  }

}

