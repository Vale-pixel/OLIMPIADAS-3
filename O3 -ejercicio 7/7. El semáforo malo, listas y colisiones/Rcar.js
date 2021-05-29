class Rcar {
    constructor(x,y){
        this.x = x;
        this.y = y;
     
       }
    
       show(){

       //red car weels
       fill(0);
       rect((this.x)-24,(this.y)-20,12,4); //L U
       rect((this.x)+12,(this.y)-20,12,4); //R U
       rect((this.x)+12,(this.y)+16,12,4); //L D
       rect((this.x)-24,(this.y)+16,12,4); //R D

       //red car body
       fill(255,0,0);
       noStroke();
       rectMode(CENTER);
       rect(this.x,this.y,50,30);
       rectMode(CORNER);

        this.slide();//red car movement
       }

       //movement with keys
       slide(dir){        
            switch(dir){
                case "UP":
                    this.y -=30;
                    break;
                case "DOWN":
                    this.y +=30;
                    break;
                case "RIGHT":
                    this.x +=30;
                    break;
                case "LEFT":
                    this.x -=30;
                    break;
            }
         }
}