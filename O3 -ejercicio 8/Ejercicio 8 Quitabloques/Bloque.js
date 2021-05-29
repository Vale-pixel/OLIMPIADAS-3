class Bloque {
    constructor(x,y,r,g,b){
    this.x = x;
    this.y = y;
    this.r= r;
    this.g=g;
    this.b=b;
    }

    mostrar(){
        fill(this.r,this.g,this.b);
        strokeWeight(3);
        stroke(0);
        rect(this.x, this.y,50,15);
        stroke(255, 0, 0);
      
    }

    validarRebote(x,y){
        if(x>this.x && x<(this.x+50)&& y>this.y && y< this.y +25){
            return true;
    }
    return false;
}
}