//This represtents the SNAKE////////////////////////////////
function snake(){
	vel = 5;
	this.x = [0];           //Position X
	this.y = [0];           //Position Y
	this.dx = 1*vel;      //Velocity along X
	this.dy = 0*vel;      //Velocity along Y
	this.size = 0;		  //Size of snake		
	//Draw the snake
	this.drawn = function(){
				for(i=0;i<=this.size;i++)
				{
					fill(43);
					rect(this.x[i],this.y[i],5,5);
				}
							
		}
	//Motion helps in determining the Direction  
	this.motion = function() {
		if (keyCode == UP_ARROW) {
				this.dy = -1*vel;
				this.dx = 0;
			}
		else if (keyCode == DOWN_ARROW) {
				this.dy = 1*vel;
				this.dx = 0;
			}
		else if (keyCode == RIGHT_ARROW) {
				this.dy = 0;
				this.dx = 1*vel;
			}
		else if (keyCode == LEFT_ARROW) {
				this.dy = 0;
				this.dx = -1*vel;
			}	
		}

	/*this.adder = function(){
		this.x.push(this.x[this.size] - this.dx);
		this.y.push(this.y[this.size] -this.dy);
}*/

	this.update = function(){
		for(i = this.size ;i > 0; i--)
		{
			this.x[i] = this.x[i-1];
			this.y[i] = this.y[i-1];
		}
}	
	//This packs the entire data of snake for Debugging via console
	this.packet = function(){
		print(" Position: (",this.x[0],",",this.y[0],")\n",
			  "Velocity: (",this.dx,",",this.dy,")\n",
			  "Size: ",this.size,"\n");
		}
	
}

/////////////////////////////////////////////////////////////////
function check() {
	s.x[0] += s.dx*factor;
    s.y[0] += s.dy*factor;
    s.x[0] %= 800;
    if(s.x[0] < 0)
        s.x[0] = 800;
	s.y[0] %= 600;
    if(s.y[0] < 0)
        s.y[0] = 600;
	
	if(s.x[0] == f.x & s.y[0] == f.y )
		return 1;
	else 
		return 0;
}
//This represtents the FRUIT////////////////////////////////
function fruit(){
	vel = 5;
	this.x = 100;
	this.y = 100;
	this.drawn = function(){
			fill(255,0,0);
			rect(this.x,this.y,5,5);
		}
	this.packet = function(){
		print(" Position: (",this.x,",",this.y,")\n");
		}
}


