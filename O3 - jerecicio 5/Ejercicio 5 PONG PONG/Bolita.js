class Bolita{

    constructor(x,y,dir,r,g,b){
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.r= r;
    this.g=g;
    this.b=b;
    this.randomX = 0;
    this.randomDir = 0;
}


mostrar(){
    fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, 20, 20);
}

mover(){
    if(this.dir === 0){
        this.x-=5;
    }else{
        this.x+=5;
    }
    this.y += this.randomDir;
}

rebotar(){
    
    this.randomDir = Math.floor(random(-1,2));
    console.log("Funciona"+ this.randomDir);
    if (this.randomDir == 0){
        this.randomDir = 1;
    }
}
}