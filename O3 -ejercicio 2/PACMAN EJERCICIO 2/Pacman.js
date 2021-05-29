class Pacman {
    constructor(x,y,r,g,b){
    this.x = x;
    this.y = y;
    this.r= r;
    this.g=g;
    this.b=b;
}

mostrar(){
    fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, 60, 60);
}

mover(key){
   // if (this.x >30 && this.x <370 && this.y >30 && this.y <370) {

    switch (key) {
        case "a":
            this.x-=5;
            break;
    
        case "A" :
            this.x-=5;
            break;

        case "d":
            this.x+=5;
            break;
    
        case "D" :
            this.x+=5;
            break;

        case "w":
            this.y-=5;
            break;
    
        case "W" :
            this.y-=5;
            break;

        case "s":
            this.y+=5;
            break;
    
        case "S" :
            this.y+=5;
            break;
    }
//}
    
}
getx(){
    return this.x;
}
gety(){
    return this.y;
}

perdiste(x,y,tamano){
    if( dist(x,y,this.x,this.y)< tamano + 30) return true;
return false;
}

}