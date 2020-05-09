class Raindrop extends baseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
    }
    fall(speed){
        this.y +=speed;
    }
}