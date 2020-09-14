var controllerOptions = {};
var i = 0;
var rawXmin, rawXmax, rawYmin, rawYmax;
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
    for (i = 0 ; i < fingers.length; i++) {
            finger = fingers[i];
            HandleFinger(finger)
       
}
}
function HandleFinger (finger) {
    for (i=0;i<4;i++) {
        bone = finger.bones[i];
        HandleBone(bone);
    }
    
}

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
    return [x,y]
}
Leap.loop(controllerOptions, function(frame)
{
    clear();
    HandleFrame(frame);
}
)

