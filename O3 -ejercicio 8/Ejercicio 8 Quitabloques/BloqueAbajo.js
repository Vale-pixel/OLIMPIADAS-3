class BloqueAbajo {
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
        rect(this.x, this.y,100,20);
    }


   mover(){
            console.log(key);
            
            switch (key) {
                
    
                case "ArrowLeft":
                    this.x-=    30;
                    break;
            
        
                case "ArrowRight":
                    this.x+=    30;
                    break;

        }
    }

}

