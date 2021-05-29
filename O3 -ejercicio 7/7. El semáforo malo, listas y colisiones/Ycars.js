class Ycars{
    constructor(x,y){
    this.x = x;
    this.y = y;
    this.dir = 1;

   }

   show(){
    
    //yellow cars wheels
    noStroke();
    fill(0);
    rect((this.x)-20,(this.y)-24,4,12); //L U
    rect((this.x)+15,(this.y)-24,4,12); //R U
    rect((this.x)+15,(this.y)+12,4,12); //L D
    rect((this.x)-20,(this.y)+12,4,12); //R D

    //yellow cars body
    fill(255,255,0);
    rectMode(CENTER);
    rect(this.x,this.y,30,50);
    rectMode(CORNER);
    this.move();
   }

   move (){

      //moving forward
      if(this.dir === 1){
        this.y -=5;
      }
      
      //return
      if(this.y<0){
        this.y = 600;
        }    
      }

  //crash notice detecter
  hit(carsX,carsY) {
    if(dist(this.x,this.y,carsX, carsY)<40) { 
		return true;
  
  } else{
   return false;
 }

  }  
  }