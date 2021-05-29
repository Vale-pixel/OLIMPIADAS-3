let cars = [];
let pantalla = 0;

cars[0] = new Ycars (145,20);
cars[1] = new Ycars (245,456);
cars[2] = new Ycars (345,128);
cars[3]= new Ycars (445,567);

let rcar = new Rcar (50,300);


function setup() {
  createCanvas(600,600);

}

function draw() {

  background(200);

    //gray background 
  fill(255);
  noStroke();
  rect(0,0,100,250);

  fill(255);
  noStroke();
  rect(500,0,100,250);

  fill(255);
  noStroke();
  rect(0,350,100,250);

  fill(255);
  noStroke();
  rect(500,350,100,250);


  //White lines
  noFill();
  stroke(255);
  strokeWeight(3);

  rect(100,0,100,600);
  rect(200,0,100,600);
  rect(300,0,100,600);
  rect(400,0,100,600);


  stroke(0);
  strokeWeight(2);

rcar.show(); //display of cars

//warning in case of collision
for (let index = 0; index < 4; index++) {
    const car = cars[index];
    car.show();
      if(car.hit(rcar.x,rcar.y)){
        fill(0);
        textSize(30);
         text("CAR CRASH", 130,50);
  }  
  }

}
//movement with keys
function keyPressed(){
  switch(key){
    case 'w':
     rcar.slide('UP');
    break;
    case 's':
      rcar.slide('DOWN');
    break;
    case 'd':
      rcar.slide('RIGHT');
    break;
    case 'a':
      rcar.slide('LEFT');
    break;
  }}