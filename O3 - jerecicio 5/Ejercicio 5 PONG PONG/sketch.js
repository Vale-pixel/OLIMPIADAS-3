let bloque = new BloqueDerecha(350,140,0,255,0);
let bloque1 = new BloqueIzquierda(40,140,0,255,0);
let bolita = new Bolita(200,200,1,255,0,0);


function setup() {
  createCanvas(400, 400);

}

function draw() {
  rectMode(CENTER);
  background(220);

  //mostrar es la función creada en cada clase para hacer visible el objeto
  bloque.mostrar();
  bolita.mostrar();
  bolita.mover();


/*Estos if realmente son areas sensibles para el bloque de la derecha. Para que 
cuando la bola llegue a esta distancia, rebote.
*/
   if(dist(bloque.x,bloque.y,bolita.x,bolita.y)< 20){
    bolita.dir = 0;
    bolita.rebotar();
  }

  if(dist(bloque.x,bloque.y -40,bolita.x,bolita.y)< 20){
    bolita.dir = 0;
    bolita.rebotar();
  }

  if(dist(bloque.x,bloque.y + 40,bolita.x,bolita.y)< 20){
    bolita.dir = 0;
    bolita.rebotar();
  }


  if (bolita.y <= 10){
    console.log("arriba");
    bolita.randomDir = 1; 
  }

  if (bolita.y >= 390){
    console.log("abajo");
    bolita.randomDir = -1;
  }
  
  bloque1.mostrar();
  

  /*Estos if realmente son areas sensibles para el bloque de la izquierda. 
  Para que cuando la bola llegue a esta distancia, rebote.
*/

  if(dist(bloque1.x,bloque1.y,bolita.x,bolita.y)< 20){
    bolita.dir = 1;
    bolita.rebotar();
  }

  if(dist(bloque1.x,bloque1.y -40,bolita.x,bolita.y)< 20){
    bolita.dir = 1;
    bolita.rebotar();
  }

  if(dist(bloque1.x,bloque1.y + 40,bolita.x,bolita.y)< 22){
    bolita.dir >= 1;
    bolita.rebotar();
  }


  /*Dependiendo de quien gana y quien pierde, aparece un texto al lado ganador
  y tambien el perdedor según corresponda
  */

  if(bolita.x <= -14) {
    textSize(30);
    fill(0);
   text("perdiste",35,50)
   textSize(30);
    fill(0);
   text("Ganaste",270,50)
    
  }

  if(bolita.x >= 414) {
    textSize(30);
    fill(0);
   text("perdiste",270,50)
   textSize(30);
    fill(0);
   text("Ganaste",35,50)
    
  }

  }

  // Cuando presione "w" o "s" se moverá el de la izquierda
  // Cuando presione "Flecha Arriba" o "Flecha Abajo" se moverá el de la derecha

function keyPressed(){
  bloque.mover();
  bloque1.mover();
}
  
  


