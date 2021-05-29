class Comida {
    constructor(x,y,r,g,b){
    this.x = x;
    this.y = y;
    this.r= r;
    this.g=g;
    this.b=b;

}

mostrar(){
    fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, 12, 12);
}

getx(){
    return this.x;
}
gety(){
    return this.y;
}
getr(){
    return this.r;
}
getg(){
    return this.g;
}
 getb(){
    return this.b;
    }

comer(x,y,tamano)
{
if( dist(x,y,this.x,this.y)< tamano + 6) return true;
return false;

}
}

