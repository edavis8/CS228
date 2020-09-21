var controllerOptions = {};
var i = 0;
var rawXmin, rawXmax, rawYmin, rawYmax;
var weight = 3;
var a = 1;
rawXmin = -250; rawXmax = 250; rawYmax = 400; rawYmin = 20;
//var x = window.innerWidth/2;
//var y = window.innerHeight/2;
function HandleFrame (frame) {
    if (frame.hands.length == 1) {
    var hand = frame.hands[0];
    HandleHand(hand);
        
}  
}
function HandleHand (hand) {
    var fingers = hand.fingers;
    var i;
    var j = 0;
    a = 250;
    weight = 3;
    for (i=0;i<4;i++) {
    for (j = 0 ; j < fingers.length; j++) {
            var finger =fingers[j];
            var bone = finger.bones[i];
            console.log(bone);
            HandleBone(bone);
            }
    a+=-50;
    weight+= -1    
    }
    }


//function HandleFinger (finger) {
//    weight = 3;
//    alpha =200;
//    for (i=0;i<4;i++) {
//        bone = finger.bones[i];/
//        HandleBone(bone);
//        weight += -1;
//        alpha -= 80;
//    }
    
//}

function HandleBone(bone) {
    var xb,yb,zb;
    var xt,yt,zt;
    [xb,yb,zb] = bone.prevJoint;
    console.log(bone.prevJoint) ;
    [xt,yt,zt] = bone.nextJoint;
    console.log(bone.nextJoint);
    [xb,yb] = TransformCoordinates(xb,yb);
    //console.log([xb,yb]);
    [xt,yt] = TransformCoordinates(xt,yt);
   // console.log([xt,yt]);
    stroke(1, a);
    strokeWeight(weight);
    line(xb,yb,xt,yt);
  //  circle(x,y,20);
 //   circle(xx,yy,10);
}
function TransformCoordinates(x,y) {
    if (x < rawXmin) {
        rawXmin = x;
    }
    if (x > rawXmax) {
        rawXmax = x;
    }
    if (y < rawYmin) {
        rawYmin = y;
    }
    if (y > rawYmax) {
        rawYmax = y;
    }
    x = map(x, rawXmin,rawXmax,50,window.innerWidth-50, true);
    y = map(y, rawYmin,rawYmax,window.innerHeight-50,50, true);
    return [x,y];
}
Leap.loop(controllerOptions, function(frame)
{
    clear();
    HandleFrame(frame);
}
)

