const knnClassifier = ml5.KNNClassifier();
controllerOptions= {};
var weight = 3;
var a = 1;
var frameIndex = 0;
var currentFrame;
var flip;
var trainingCompleted = false;
var numSamplesZero;
var numSamplesOne;
var numSamplesTest;
var numFeatures;
var irisData;
var currentFeatures;
var currentLabel;
var testingSampleIndex = 0;
var predictedLabel;
var features;
var currentTestingSample;
var i = 0;
var rawXmin, rawXmax, rawYmin, rawYmax;
var weight = 3;
var a = 1;
var previousNumHands=0;
var currentNumHands=0;
var numSamples = 100 ;
var framesOfData = nj.zeros([4,5,6]);
nj.config.printThreshold = 1000;
rawXmin = -250; rawXmax = 250; rawYmax = 400; rawYmin = 20;
var m = 0
var n = 1

//numFeatures = irisData.shape[1];
//var predictedClassLabels = nj.zeros([numSamplesTest]);
  
function GotResults(err,result) {
   //     console.log(testingSampleIndex, currentTestingSample.toString());
        var c = result.label;
        var d = 0;
        m = ((n-1)*m + (c==d))/n;
        n+=1
        console.log(n, m , c);
        
  //      predictedClassLabels.set(testingSampleIndex, result.label);
        testingSampleIndex += 1;
        if (testingSampleIndex == numSamplesTest) {
            testingSampleIndex =0;
        }
}

function Train() {
    console.log(train0.shape);
    numSamplesZero = train0.shape[3];
    numSamplesOne = train1.shape[3];
  //  console.log(test);
  //  console.log(train0);
 //   var even;
 //   console.log("I am being trained");
    for (i = 0; i < numSamplesZero; i++) {
        features = train0.pick(null,null,null,i).reshape(1,120);
 //       console.log(features.toString());
        knnClassifier.addExample(features.tolist(), 0);        
        features = train1.pick(null,null,null,i).reshape(1,120);
  //      console.log(features.toString());
        knnClassifier.addExample(features.tolist(), 1);  

}
}

function Test() {
 //   numSamplesTest = test.shape[3];
 //   var predictedClassLabels = nj.zeros([numSamplesTest]);
//    console.log("I am being tested");
 //   for (i = 0; i < numSamplesTest; i++) {
 //           currentTestingSample = //test.pick(null,null,null,i).reshape(1,120);
 //   currentFeatures = irisData.pick(testingSampleIndex).slice([0, 4]);
 //   currentLabel = irisData.pick(testingSampleIndex).get(4);
    CenterData();
    features = framesOfData.reshape(1,120);
    predictedLabel = knnClassifier.classify(features.tolist(), GotResults);
        //    console.log(currentTestingSample.toString() );
            
//}
}

function CenterData() {
    xValues = framesOfData.slice([],[],[0,6,3])
    console.log(xValues.shape);
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
      currentTestingSample
      Test();
        
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
        framesOfData.set(boneIndex,fingerIndex,i, normalizedPrevJoint[i]);
    }
    for (i=0 ; i<3 ; i++) {
        framesOfData.set(boneIndex,fingerIndex,i+3, normalizedNextJoint[i]);
    }
    var canvasXp = window.innerWidth * normalizedPrevJoint[0];
    var canvasYp = window.innerHeight * (1 - normalizedPrevJoint[1]);
    var canvasXn = window.innerWidth * normalizedNextJoint[0];
    var canvasYn = window.innerHeight * (1 - normalizedNextJoint[1]);

    if (currentNumHands==1){
        stroke(50,50,50, a);
        strokeWeight(weight*10);
        line(canvasXp, canvasYp,canvasXn,canvasYn);
    }
//    if (currentNumHands == 2) {
//        stroke(139,34,34, a);
//        strokeWeight(weight*10);
//        line(canvasXp, canvasYp,canvasXn,canvasYn);
//    }

  //  circle(x,y,20);
 //   circle(xx,yy,10);
}   
Leap.loop(controllerOptions, function(frame)
{
//function draw() {
    clear();
    if (trainingCompleted == false) {
        Train();
        trainingCompleted = true;
    }
 //   }
    HandleFrame(frame);

    

})
