var controllerOptions = {};
var i = 0;
var rawXmin, rawXmax, rawYmin, rawYmax;
var weight = 3;
var a = 1;
var previousNumHands=0;
var currentNumHands=0;
var oneFrameOfData = nj.zeros([4,5,6]);
rawXmin = -250; rawXmax = 250; rawYmax = 400; rawYmin = 20;
//var x = window.innerWidth/2;
//var y = window.innerHeight/2;
function RecordData () {
//    console.log(previousNumHands == 1 & currentNumHands == 2);
//    console.log(previousNumHands == 1 & currentNumHands == 2);
    if (previousNumHands == 1 & currentNumHands == 2){
    background(0,0,0);
    console.log(oneFrameOfData.toString());
    }
}
function HandleFrame (frame) {
    previousNumHands = currentNumHands;
    if (frame.hands.length == 1) {
      var hand = frame.hands[0];
      currentNumHands = 1;
      HandleHand(hand);
        
}
    else if (frame.hands.length == 2) {
      var hand = frame.hands[0];
      currentNumHands = 2;
      HandleHand(hand);
        
}
    else {
      currentNumHands = 0;  
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
 //           console.log(bone);
            HandleBone(bone, i, j);
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

function HandleBone(bone, boneIndex, fingerIndex) {
    var xb,yb,zb;
    var xt,yt,zt;
    [xb,yb,zb] = bone.prevJoint;
 //   console.log(bone.prevJoint) ;
    [xt,yt,zt] = bone.nextJoint;
//    console.log(bone.nextJoint);
    [xb,yb] = TransformCoordinates(xb,yb);
    //console.log([xb,yb]);
    [xt,yt] = TransformCoordinates(xt,yt);
   // console.log([xt,yt]);
    if (currentNumHands==1){
        stroke(34,139,34, a);
        strokeWeight(weight);
        line(xb,yb,xt,yt);
    }
    if (currentNumHands == 2) {
        stroke(139,34,34, a);
        strokeWeight(weight);
        line(xb,yb,xt,yt);
    }
    for (i=0 ; i<3; i++ ) {
        oneFrameOfData.set(boneIndex,fingerIndex,i, [xb,yb,zb][i]);
    }
    for (i=0 ; i<3 ; i++) {
        oneFrameOfData.set(boneIndex,fingerIndex,i+3, [xt,yt,zt][i]);
    }
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
  //  console.log(previousNumHands);
//    console.log(currentNumHands);
    HandleFrame(frame);
    RecordData();
}
)

