class stars{
  constructor(_x,_y,_radius1,_radius2,_npoints){
      this.x=_x;
      this.y=_y;
      this.radius1=_radius1;
      this.radius2=_radius2;
      this.npoints=_npoints;
        
  }


  display(){
     push();
    let angle = TWO_PI / this.npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
    let sx = this.x + cos(a) * this.radius2;
    let sy = this.y + sin(a) * this.radius2;
    vertex(sx, sy);
    sx = this.x + cos(a + halfAngle) * this.radius1;
    sy = this.y + sin(a + halfAngle) * this.radius1;
    vertex(sx, sy);
    }
    endShape(CLOSE);
    pop();
  
  }
  move(){
    if(this.y<=height*2){this.y=this.y+3;}
    else{
      this.y=-height* .5;
    }
  }
}



