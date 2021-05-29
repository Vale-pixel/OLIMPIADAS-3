class Bolita{

    constructor(x,y,dir,r,g,b){
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.r= r;
    this.g=g;
    this.b=b;
    this.randomY = 0;
    this.randomDir = 0;
    this.dirX = (Math.random()-0.5*8);
    this.dirY = Math.random()-0.5*8;
}


mostrar(){
    fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, 20, 20);
}

mover(){
    this.x+= this.dirX;
    this.y+=this.dirY;
    
this.rebotar();
}

rebotar(){
    if(this.x<= 10){
        console.log("izquierda")
    this.dirX*=-1;
    }
    
    if(this.x>= 390){
        console.log("derecha")
    this.dirX*=-1;
    }

    if(this.y<= 10){
        console.log("arriba")
    this.dirY*=-1;
    }
    


}

rebotarY(){
    this.dirY *= -1;
}

}