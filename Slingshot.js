class Slingshot{
constructor(bodyA, pointB){
var options = {
bodyA: bodyA,
pointB: pointB,
stiffness: 0.04,
length: 10
}

this.pointB = pointB
this.sling = Constraint.create(options);
World.add(world, this.sling);
}

FLY(){
this.sling.bodyA = null;
}

display(){

if(this.sling.bodyA){
var bodyA = this.bodyA;
var pointB = this.pointB;
push();
line(bodyA.x, bodyA.y, pointB.x, pointB.y); 

pop();

}
}
    
}