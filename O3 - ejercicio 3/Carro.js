class Carro extends Mediodetransporte{
    constructor(x, y, r, g, b){
        super(x, y, r, g, b);
        
    }

    show(){ 
    //ventanas
    fill(255);
    noStroke();
    rect((this.x)+10, (this.y)+10, 44, 33);
    rect((this.x)+64, (this.y)+10, 44, 33);
    
    }
    
}
