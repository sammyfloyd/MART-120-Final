class Bunny {
    constructor() {
      this.r = 130;
      this.x = 50;
      this.y = height - this.r;
      this.vy = 0;
      this.gravity = 2;
    }
    
    jump() {
      if (this.y == height - this.r) {
      this.vy = -35;
      }
    }
    
    hits(bush) {
      return collideRectRect(this.x,this.y,this.r,this.r,bush.x,bush.y,bush.r,bush.r);
    }
    
    move() {
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y, 0, height - this.r);
      
    }
    
    show() {
      image(uImg,this.x, this.y, this.r, this.r);
      //fill (200, 30);
      //rect(this.x, this.y, this.r, this.r)
    }
    
    
  }