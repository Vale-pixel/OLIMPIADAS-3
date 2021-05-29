class Mediodetransporte{
    constructor(x, y, r, g, b){
        this.x = x;
        this.y = y;
        
        this.r= r;
        this.g = g;
        this.b = b;
    }
    
    mostrar(){
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, 118, 76);
        //llantas
        fill(35);
        ellipse((this.x)+25,(this.y)+76,30);
        ellipse((this.x)+92,(this.y)+76,30);
    }
}
