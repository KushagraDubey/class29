class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
 this.sling1 = loadImage("sprites/sling1.png");
 this.sling2 = loadImage("sprites/sling2.png");
 this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200,50); 
        image(this.sling2, 175,50);

        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3);
            stroke(71, 33, 13);
            if(pointA.x<200){
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y, pointB.x +20 , pointB.y -5);
            image(this.sling3,pointA.x -25,pointA.y -25,15,30);
            }else{
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y, pointB.x +20 , pointB.y -5);
            image(this.sling3,pointA.x -25,pointA.y -25,15,30);}
            pop();
        }
    }
    
}