let fantasmaRojo = new FantasmaRojo(100,100,1,255,0,0);
let fantasmaVerde = new FantasmaVerde(200,100,0,0,255,0);
let pacman = new Pacman(50,50,255,255,0);


let comida = [];


function setup() {
  createCanvas(400, 400);
rectMode(CENTER);
  

//Creo un arreglo para hacer bolitas que simbolizan comida
  for (let i = 0; i < 40; i++) {
    let x = Math.random() * (400 - 6) + 6;
    let y = Math.random() * (400 - 6) + 6;
    comida.push(new Comida(x,y,255,0,0));


    
  }
}

function draw() {
  

  background(220);

  pacman.mostrar();


  validarTeclas();

  for (let i = 0; i < comida.length; i++) {
    comida[i].mostrar();
    if (comida[i].comer(pacman.getx(),pacman.gety(),30)){
      comida.splice(i,1);
    }

    
  }

  

  fantasmaRojo.mostrar();
  fantasmaRojo.mover();
  if(pacman.perdiste(fantasmaRojo.getx(), fantasmaRojo.gety(), 20)){
    console.log ("perdiste");
    location.reload();
  }

  fantasmaVerde.mostrar();
  fantasmaVerde.mover();
  if(pacman.perdiste(fantasmaVerde.getx(), fantasmaVerde.gety(), 20)){
    console.log ("perdiste");
    location.reload();
  }

//Este es para mover el pacman

function validarTeclas() {
  if (keyIsDown(97) || keyIsDown (65)) {
    pacman.mover(key);
  }
  if (keyIsDown(68) || keyIsDown (100)) {
    pacman.mover(key);
  }
  if (keyIsDown(87) || keyIsDown (119)) {
    pacman.mover(key);
  }
  if (keyIsDown(83) || keyIsDown (115)) {
    pacman.mover(key);
}
  }
}




