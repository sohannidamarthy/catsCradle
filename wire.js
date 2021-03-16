class wire{
    constructor(bodyA, pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            
            length:100
            
        }
        this.pointB = pointB
        this.sling= Constraint.create(option)
        World.add(world,this.sling)
    }
    display(){
        var pointA = this.sling.bodyA.position
        var pointB= this.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y)


    }
}