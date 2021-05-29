class BloqueIzquierda {
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
            rect(this.x, this.y,20,100);
    }

    mover(){
        console.log(key);
        
        switch (key) {
            

            case "W":
                this.y-=    20;
                break;
        
            case "w" :
                this.y-=    20;
                break;
    
            case "s":
                this.y+=    20;
                break;
            case "S":
                this.y+=    20;
                break;
    }
}
    }