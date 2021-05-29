class Fantasmas{
    constructor(x,y,dir,r,g,b){
        this.x = x;
        this.y = y;
        this.r= r;
        this.g=g;
        this.b=b;
        this.dir = dir;
    }
  mostrar(){
    fill(this.r,this.g,this.b);
    rectMode(CENTER);
    rect(this.x, this.y, 50, 50);
    rectMode(CORNER); 
    this.especial();       
}
getx(){
  return this.x
}
gety(){
  return this.y
}
}




