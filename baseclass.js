class baseClass{
  constructor(x,y,width,height){
      this.body = rect(x,y,width,height);
      this.height = height;
      this.width = width;
      this.image = loadImage("p.png");
      this.x = x;
      this.y = y;
      
  }

  display(){
      push();
      fill("blue");
      rectMode(CENTER);
      rect(this.x, this.y, this.width,this.height);
      pop();
  }
}