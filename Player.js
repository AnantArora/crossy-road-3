class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.spt=createSprite(this.x, this.y, 50,50);
        this. spt . shapeColor="orange";  
        this. spt . scale=0.05;
        this. spt .addAnimation("car",carAnimation1);
        //change the direction of cars in the midd1e row.
        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850)
        {
        speed= - speed;
         this.spt.addAnimation("Player-03.png", playerAnimation);
}
    
    }
    
    move(xdir,ydir){
        this .spt.x += xdir*grid;
        this .spt.y += ydir*grid;
        
    }
}