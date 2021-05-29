 let carrito = new Carro (190, 120, 226, 6, 19);
 let carrotombo = new Carrodepolicia (190,287,29,112,183);


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  carrito.mostrar();
  carrito.show();
  carrotombo.mostrar();
  carrotombo.show();
  carrotombo.sirena();
  
}
