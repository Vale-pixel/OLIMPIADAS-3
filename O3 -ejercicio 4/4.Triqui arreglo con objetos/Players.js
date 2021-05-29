class Players{
    constructor(x,y){
this.x=x;
this.y=y;
this.case = 0;
}

show(){   

    //player items
rect(this.x,this.y,100,100);

    switch(this.case){
        case 0:
           textSize(35);
           text("",this.x,this.y);
        break;
        case 1:
            textSize(35);
            text("O",(this.x)+35,(this.y)+60);
        break;
        case 2:
            textSize(35);
            text("X",(this.x)+35,(this.y)+60);
        break;
    }

}
//selection
validateClick(ax, ay){
    if(ax > this.x && ax < this.x + 100 &&
         ay > this.y && ay < this.y + 100){
        return true;
    }
    return false;
}

returnCase(newCase){
this.case = newCase;
}
}