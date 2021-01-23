class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
       
        this.sling1=Constraint.create(options);
        World.add(world,this.sling1);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        stroke("red");
        //if(this.sling.bodyA){
        var pointA = this.sling1.bodyA.position;
        var pointB = this.sling1.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    //}
        }
    }  