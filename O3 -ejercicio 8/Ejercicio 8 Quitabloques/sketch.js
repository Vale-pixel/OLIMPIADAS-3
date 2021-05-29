let bloque = new BloqueAbajo(150,360,0,255,255);
let bolita = new Bolita(200,200,1,255,0,0);

let bloquesitos = [];

function setup() {
  createCanvas(400, 400);


  //Creo un arreglo para hacer los bloques
   for (let i = 0; i < 6; i++) {
    bloquesitos.push(new Array());
    for (let j = 0; j < 4; j++) {
      let x = (i*60)+20;
      let y = (j*30)+25;
      bloquesitos[i].push (new Bloque(x,y,0,255,0,0));
    }
  }
}

function draw() {
  background(220);
  bloque.mostrar();
  bolita.mostrar();
  bolita.mover();


  
  for (let i = 0; i < bloquesitos.length; i++) {
    for (let j = 0; j < bloquesitos[i].length; j++) {
     
      bloquesitos[i][j].mostrar();
      bloquesitos[i][j].validarRebote(bolita.x,bolita.y);

      if(bloquesitos[i][j].validarRebote(bolita.x,bolita.y)){
        bolita.rebotarY();
        bloquesitos[i].splice(j,1);
      }
    }
  }
  if(bolita.x>bloque.x && bolita.x<(bloque.x+100)&& bolita.y<bloque.y && bolita.y> bloque.y -10){
    console.log("entró");
    bolita.rebotar();
    bolita.rebotarY();
  }


  if (bolita.y <= 10){
    console.log("arriba");
    bolita.randomDir = 1; 
  }

  if (bolita.y >= 390){
    console.log("abajo");
    bolita.randomDir = -1;
  }

  if(bolita.y >= 414) {
    textSize(50);
    fill(0);
   text("perdiste",100,200);
  
  }


}


function keyPressed(){
  bloque.mover();
}

