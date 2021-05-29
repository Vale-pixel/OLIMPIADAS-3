
let highway = new Highway();
let cars = [];
let screen = 0;
let supercar = new Supercar(50, 200, 29,113,184);



cars[0] = new Cars(200,0,0,152,58);
cars[1] = new Cars(10,100,234,91,12);
cars[2] = new Cars(230,200,45,46,131);
cars[3] = new Cars(500,300,190,22,34);
cars[4] = new Cars(315,400,130,54,140);
cars[5] = new Cars(430,100,249,178,51);


function setup() {
  createCanvas(600, 400);
 
}

function draw() {
  background(220);

  
  switch (screen) {
    case 0:
      //mostrar carretera
highway.show();
   //mostrar carro principal
supercar.show();
supercar.show1();

//arreglo para mostrar los otros carros
for (let i = 0; i < 6; i++) {
    const car = cars[i];
    car.show();
    car.display();
      if(car.crash(supercar.x,supercar.y)){
        screen = 1;
      
    }  
  }
 

break;

case 1:
  //mostrar pantalla cuando perdió y opción de continuar
background(0);
textSize(40);
text("Oh no! you lost",150,200);
textSize(17);
fill(255);
text("Restart",250,250);

  break;

  }
} 

function mouseClicked (){
  if(screen === 1){
    screen = 0;
  }
}


