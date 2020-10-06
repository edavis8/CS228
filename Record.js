var controllerOptions = {};
var i = 0;
var rawXmin, rawXmax, rawYmin, rawYmax;
var weight = 3;
var a = 1;
var previousNumHands=0;
var currentNumHands=0;
var currentSample = 0;
var numSamples = 2 ;
var framesOfData = nj.zeros([4,5,6, numSamples]);

rawXmin = -250; rawXmax = 250; rawYmax = 400; rawYmin = 20;

function RecordData () {
    

    if (previousNumHands == 1 & currentNumHands == 2){
        background(0,0,0);
    console.log(framesOfData.toString());
   // console.log( framesOfData.pick(null,null,null,1).toString() );
    }
    if (previousNumHands == 2 & currentNumHands == 2){
  //      background(0,0,0);
        console.log(framesOfData.toString());
//        console.log( framesOfData.pick(null,null,null,1).toString() );
        currentSample+=1
        if (currentSample == numSamples ) {
            currentSample=0;
    }
    }
}
function HandleFrame (frame) {
    var InteractionBox = frame.interactionBox;
    previousNumHands = currentNumHands;
//    console.log(frame.interactionBox.depth);
//    console.log(frame.interactionBox.height);
    if (frame.hands.length == 1) {
      var hand = frame.hands[0];
      currentNumHands = 1;
      HandleHand(hand, InteractionBox);
        
}
    else if (frame.hands.length == 2) {
      var hand = frame.hands[0];
      currentNumHands = 2;
      HandleHand(hand, InteractionBox);
        
}
    else {
      currentNumHands = 0;  
    }
}
function HandleHand (hand, InteractionBox) {
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
            HandleBone(bone, i, j, InteractionBox);
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

function HandleBone(bone, boneIndex, fingerIndex, InteractionBox) {
    var xb,yb,zb;
    var xt,yt,zt;
    [xb,yb,zb] = bone.prevJoint;
    normalizedPrevJoint = InteractionBox.normalizePoint(bone.prevJoint, clamp = true);


    [xt,yt,zt] = bone.nextJoint;
    normalizedNextJoint= InteractionBox.normalizePoint(bone.nextJoint, clamp = true);
    for (i=0 ; i<3; i++ ) {
        framesOfData.set(boneIndex,fingerIndex,i,currentSample, normalizedPrevJoint[i]);
    }
    for (i=0 ; i<3 ; i++) {
        framesOfData.set(boneIndex,fingerIndex,i+3,currentSample, normalizedNextJoint[i]);
    }
    var canvasXp = window.innerWidth * normalizedPrevJoint[0];
    var canvasYp = window.innerHeight * (1 - normalizedPrevJoint[1]);
    var canvasXn = window.innerWidth * normalizedNextJoint[0];
    var canvasYn = window.innerHeight * (1 - normalizedNextJoint[1]);

    if (currentNumHands==1){
        stroke(34,139,34, a);
        strokeWeight(weight*10);
        line(canvasXp, canvasYp,canvasXn,canvasYn);
    }
    if (currentNumHands == 2) {
        stroke(139,34,34, a);
        strokeWeight(weight*10);
        line(canvasXp, canvasYp,canvasXn,canvasYn);
    }

  //  circle(x,y,20);
 //   circle(xx,yy,10);
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

