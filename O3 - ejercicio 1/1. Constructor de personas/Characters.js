class Characters {	
	constructor (x, r, g, b, rs, gs, bs, rsh, 
		gsh, bsh, rh, gh, bh, gender) {

		
		this.x =x; //character coordinates
		this.y = 350;
		
		this.r = r; //background color values
		this.b = b;
		this.g = g;

		this.rs = rs; //character skin color values
		this.b2 =bs;
		this.gs = gs;

		this.rh = rh;//characters hair color values
		this.bh = bh;
		this.gh = gh;

		this.rsh = rsh; //characters shirt color values
		this.bsh = bsh;
		this.gsh = gsh;
		
	
		this.gender = gender; // characters gender , true = f, false = m
	}
	
	 show() {
		 
		noStroke();

		fill(this.r,this.g,this.b); //background 
		circle(this.x,this.y-13, 225);

		fill(this.rsh,this.gsh,this.bsh); //color shirt
		rect(this.x,this.y+50,100,100)

				if (this.gender==true) { //bangs for woman
					fill(this.rh,this.gh,this.bh);
					rect(this.x,this.y-30,90,60);
				}

		fill(this.rs,this.gs,this.b2); //neck
		rectMode(CENTER);
		rect(this.x,this.y-10,30,30);

		fill(50,20); //shadow on neck
		arc(this.x,this.y-10,30,20,0,PI);

		         if (this.gender==false) { //tie for male
			         fill(0,50,255);
		             arc(this.x,this.y+3,30,20,0,PI);
		             fill(0,0,255);
		             rect(this.x,this.y+34,15,50);
		        }
		
		fill(this.rs,this.gs,this.b2); //head
		ellipse(this.x,this.y-60,90,110);

	
		fill(0); //eyes
		ellipse(this.x-20,this.y-55,10,12);
		ellipse(this.x+20,this.y-55,10,12);

		        if (this.gender==true) { //lips for female
			        fill(255,50,0);
		            arc(this.x,this.y-33,40,30,0,PI);
		        }

		fill(255); //sonrisa
		arc(this.x,this.y-30,30,20,0,PI);
		
		
		if (this.gender==false) { //male hair
			noStroke();
			fill(this.rh,this.gh,this.bh);
			arc(this.x,this.y-70,87,90,600,PI+3.15);
		}
		
		if (this.gender==true) { //female hair
			noStroke();
			fill(this.rh,this.gh,this.bh);
			arc(this.x,this.y-70,87,90,600,PI+3.15);

		}

	}

}