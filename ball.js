class ball{
    constructor(x,y,width,height){
        var option ={
            restitution:1,
            density:1,
            friction:0.5,
            isStatic:false
        }
       this.body=Bodies.rectangle(x,y,width,height,option) 
       this.width=width
       this.height=height

       World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS)
        ellipse(0,0,this.width,this.height)
        pop()
    }
}