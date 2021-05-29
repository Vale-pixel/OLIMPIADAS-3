class Cars extends Supercar {
    constructor(x,y,r, g , b){
        super(x,y,r, g , b);
        
     
        this.dir = 1;
    }


display(){

this.moveAlong();

}
//avanzar
moveAlong(){
    if(this.dir === 1){
        this.x -=5;
    }

    if(this.x < 0){
        this.x = 600;
    }
}

crash(cX, cY){
    if(dist(this.x, this.y, cX, cY) < 40){
        return true;
        screen = 1;
    } else{
        return false;
        screen = 0;
    }
}
}