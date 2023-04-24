/*
let planet1X = random(-200,200);
let planet1Y = random(-100,100);
let planet1Z = random(100);
let planet1Size = random(10,80);
*/

let planetX;
let planetY;
let planetZ;
let planetSize;





function setup() {
    createCanvas(1440, 720, WEBGL);
    //createCanvas(1440, 720); //FLAT
    /*background(0);
    //frameRate(3);

    let x = random(-200,1440);
    let y = random(-100,720);
    let z = random(100);

    x = 150
    y = 150
    z = 200
    let planetSize = random(10,80);

    noStroke();
    //fill(random(35,124),random(17,158), random(35,178));
    fill(0,255,255);
    translate(x,y,z);
    sphere(planetSize);
    //sphere(planetSize);*/
   
    // planet 1
    /*planet1X = random(-200,200);
    planet1Y = random(-100,100);
    planet1Z = random(100);
    planet1Size = random(10,80);
    */

    planetX = []
    planetY = []
    planetZ = []
    planetSize = []

    for (let i = 0; i < 8; i++) {
        planetX.push(random(-600,600));
        planetY.push(random(-300,300));
        planetZ.push(random(0,100));
        planetSize.push(random(20,80));
    }


  }

  function draw(){
    background(0);
    //translate(-720,-360,0);
    //noStroke();
    //fill (255); // test position
    //rect (5,5,10,10); // test position
    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, -dirX, -dirY, -1);
    //fill(255,255,255);
    
    
   // planet (random(200,700),random(100,300),20);
    //let x= random(1240);
    //let y = random(620);
   // planet (random(1240),random(620),20);
    //planet (x,y,60);
    /*planet (30);
    planet (40);
    planet (60);
    planet (80);*/


    //NEW START
    //x = planet1X
    //y = 150
    //z = 200
    //let planetSize = random(10,80);

    noStroke();
    //fill(random(35,124),random(17,158), random(35,178));
    
    /*fill(0,255,255);
    translate(planetX[0],planetY[0],planetZ[0]);
    sphere(planetSize[0]);
    translate(planetX[1],planetY[1],planetZ[1]);
    sphere(planetSize[1]);*/

    for(let i=0; i<8; i++){
      fill(0,255,255);
      translate(planetX[i],planetY[i],planetZ[i]);
      sphere(planetSize[i]);
      //put starting point back to 0,0, so that it doesn't translate based on last spot
      translate(-1*planetX[i],-1*planetY[i],-1*planetZ[i]);
    }
    
    

    
}

/*function planet(x,y,radius){ 

    r = random(35,124);
    g = random(17,158);
    b = random(35,178);
    a = random(100,255);
   
    
    
    fill(r,g,b,a);
    //ellipse(x,y,diameter,diameter); //the circles
    sphere(radius);
  
  }
  */

  /*function planet(radius){ 

    r = random(35,124);
    g = random(17,158);
    b = random(35,178);
    a = random(100,255);
   
    fill(r,g,b,a);
    //ellipse(x,y,diameter,diameter); //the circles
    //ellipse(x, y, diameter);
    let x= random(-200,200);
    let y = random(-200,200);
    let z = random(10);
    translate(x,y,z);
    sphere(radius);
  
  }
  */



