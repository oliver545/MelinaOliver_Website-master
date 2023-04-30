/* function, arguments, parameters, for/while loop*/

function setup() {
    createCanvas(720, 720);
    background(0);
    frameRate(5);
  }
  
  function draw(){ 
    noStroke();
    fill(0,0,0,180);
    rect(0,0,720,720);
    planet (100,100,20);
    planet (300,200,100);
    planet (600,150,50);
    planet (600,150,50);
    planet (150,500,80);
    planet (400,450,30);
    planet (550,600,60);
    planet (550,350,40); /*"550,350,40" are the arguments*/
  

    for(let meep=0; meep<=50;meep++){
      let x = random(720);
      let y = random(720);
      let dia = random(20);
      fill(255);
      ellipse(x,y,dia,dia);
    }

}
  
  function planet(x,y,diameter){ /*parameter is the "x,y,diameter"*/
    /*colors
    r = 124,82,55,35,0
    g = 158,82,37,17,0
    b = 178,140,84,35,0
    */

    r = random(35,124);
    g = random(17,158);
    b = random(35,178);
    a = random(100,255);
    //fill(226,192,68,a);
    fill(x+diameter*2,diameter/2,diameter+50,a);
    //planet moons
    ellipse(x-diameter-40,y,diameter/4,diameter/4);//planet moons
    ellipse(x-diameter,y+diameter+10,diameter/4,diameter/4);
    ellipse(x+diameter-30,y-diameter,diameter/4,diameter/4);
    ellipse(x+diameter-20,y+diameter,diameter/4,diameter/4);
    ellipse(x+diameter+30,y,diameter/4,diameter/4);
    
    
    
    fill(r,g,b,a);
    ellipse(x,y,diameter,diameter); //the circles
  
  }

  

  
  


  

  