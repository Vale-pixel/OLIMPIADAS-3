class Character1 extends Characters{
    constructor (x, r, g, b, rs, gs, bs, rsh, 
		gsh, bsh, rh, gh, bh, gender) {

super(x, r, g, b, rs, gs, bs, rsh, 
    gsh, bsh, rh, gh, bh, gender);
}

show(){
 
    noStroke();

		fill(this.r,this.g,this.b); //background 
		circle(this.x,this.y, 200);

        /*
		fill(this.rs,this.gs,this.b2); //neck
		rectMode(CENTER);
		rect(this.x,this.y-10,30,30);
		//Shadow on neck
		fill(50,20);
		arc(this.x,this.y-10,30,20,0,PI);
		//Head
		fill(this.rs,this.gs,this.b2);
		ellipse(this.x,this.y-60,90,110);
		//Eyes and smile
		fill(0);
		ellipse(this.x-20,this.y-55,9,15);
		ellipse(this.x+20,this.y-55,9,15);
		fill(255);
		arc(this.x,this.y-30,30,20,0,PI);
		stroke(200);
		line(this.x-13,this.y-25,this.x+5, this.y-25);	*/
}

}