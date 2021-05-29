class BloqueDerecha {
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
            

            case "ArrowUp":
                this.y-=    20;
                break;
        
    
            case "ArrowDown":
                this.y+=    20;
                break;
        
    }
}
    }
      
 

