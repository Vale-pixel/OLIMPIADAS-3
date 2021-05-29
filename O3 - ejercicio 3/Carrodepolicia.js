class Carrodepolicia extends Carro{
    constructor(x, y, r , g, b) {
     super(x,y,r,g,b);
        
    }

    sirena(){
        fill(226,6,19);
        noStroke();
        rect((this.x)+47, (this.y)-10, 25, 10);
    }


}
