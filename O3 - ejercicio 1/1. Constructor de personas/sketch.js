let character1; 
let character2;
let character3;
let character4;

function setup() {

  createCanvas(1100, 700); 

  character1 = new Characters(150,245,150,249,255,214,206,41,213,131,155,30,0, false);
  character2 = new Characters(400,123,58,255,170,109,21,115,205,237,15,5,7, true);
  character3 = new Characters(650,46,92,153,200,176,109,137,86,59,38,31,5, false);
  character4 = new Characters(900,55,200,130,209,190,170,238,105,142,255,160,60,true);
}

function draw() {
  background(250);

  character1.show();
	character2.show();
	character3.show();
	character4.show();	
}
