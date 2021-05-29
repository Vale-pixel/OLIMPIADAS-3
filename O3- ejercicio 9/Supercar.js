class Supercar{
constructor(x,y,r, g , b){
this.x = x;
this.y = y;


this.r = r;
this.g = g;
this.b = b;
}

show(){
    noStroke();

    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 40, 24);
    
    fill(0);
    rect(this.x-3, this.y-6, 12, 6);
    rect(this.x+30, this.y-6, 12, 6);
    rect(this.x-3, this.y+24, 12, 6);
    rect(this.x+30, this.y+24, 12, 6);

    


}

show1(){
    this.move();
}

move(){
this.y = mouseY;
}





}