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
var oneFrameOfData = nj.zeros([5,4,6]);
nj.config.printThreshold = 1000;
rawXmin = -250; rawXmax = 250; rawYmax = 400; rawYmin = 20;
var m = 0
var n = 1

function GotResults(err,result) {

        var c = result.label;
        var d = 1;
        m = ((n-1)*m + (c==d))/n;
        n+=1
        console.log(n, m , c);
        
        testingSampleIndex += 1;
        if (testingSampleIndex == numSamplesTest) {
            testingSampleIndex =0;
        }
}

function Train() {
    numSamplesZero = train0.shape[3];
    numSamplesOne = train1.shape[3];
    for (i = 0; i < numSamplesZero; i++) {
        features = train0.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120)
        knnClassifier.addExample(features.tolist(), 0);  
        features = train1.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 1);  

}
}

function Test() {
    CenterData(oneFrameOfData);
    features = oneFrameOfData.reshape(1,120);
    predictedLabel = knnClassifier.classify(features.tolist(), GotResults);

}

function CenterData(data) {
    var xValues = data.slice([],[],[0,6,3]);
    var currentXMean = xValues.mean();
    var horizontalShiftX = 0.5 - currentXMean;
    var yValues = data.slice([],[],[1,6,3]);
    var currentYMean = yValues.mean();
    var horizontalShiftY = 0.5 - currentYMean;
    var zValues = data.slice([],[],[2,6,3]);
    var currentZMean = zValues.mean();
    var horizontalShiftZ = 0.5 - currentZMean;
//    console.log('beforeX', currentXMean);
//    console.log('beforeY', currentYMean);
    for (currentRow = 0 ; currentRow < 5 ; currentRow++ ) {
        for (currentColumn = 0 ; currentColumn <4; currentColumn++) {
          //  console.log(currentRow, currentColumn);
           var currentX = oneFrameOfData.get(currentRow,currentColumn,0);
           var shiftedX = currentX + horizontalShiftX;
           data.set(currentRow,currentColumn,0, shiftedX); 
           currentX = data.get(currentRow,currentColumn,3);
           shiftedX = currentX + horizontalShiftX;
           data.set(currentRow,currentColumn,3, shiftedX);
           var currentY = data.get(currentRow,currentColumn,1);
           var shiftedY = currentY + horizontalShiftY;
           data.set(currentRow,currentColumn,1, shiftedY); 
           currentY = data.get(currentRow,currentColumn,4);
           shiftedY = currentY + horizontalShiftY;
           data.set(currentRow,currentColumn,4, shiftedY);  
           var currentZ = data.get(currentRow,currentColumn,2);
           var shiftedZ = currentZ + horizontalShiftZ;
           data.set(currentRow,currentColumn,2, shiftedZ); 
           currentZ = data.get(currentRow,currentColumn,5);
           shiftedZ = currentZ + horizontalShiftZ;
           data.set(currentRow,currentColumn,5, shiftedZ);  
        }
    }
    xValues = data.slice([],[],[0,6,3]);
    currentXMean = xValues.mean(); 
 //   console.log('afterX', currentXMean);
    yValues = data.slice([],[],[1,6,3]);
    currentYMean = yValues.mean(); 
//    console.log('afterY', currentYMean);
    zValues = data.slice([],[],[2,6,3]);
    currentZMean = zValues.mean(); 
//    console.log('afterZ', currentZMean);
}

function HandleFrame (frame) {
    var InteractionBox = frame.interactionBox;
    previousNumHands = currentNumHands;
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
    for (j = 0 ; j < fingers.length; j++) {
        a = 250;
        weight = 3;        
        for (i=0;i<4;i++) {
 
            var finger =fingers[j];
            var bone = finger.bones[i];
            HandleBone(bone, i, j, InteractionBox);
            a+=-50;
            weight+= -1
            }
   
    }
    }



function HandleBone(bone, boneIndex, fingerIndex, InteractionBox) {
    var xb,yb,zb;
    var xt,yt,zt;
    [xb,yb,zb] = bone.prevJoint;
    normalizedPrevJoint = InteractionBox.normalizePoint(bone.prevJoint, clamp = true);


    [xt,yt,zt] = bone.nextJoint;
    normalizedNextJoint= InteractionBox.normalizePoint(bone.nextJoint, clamp = true);
    for (i=0 ; i<3; i++ ) {
        oneFrameOfData.set(fingerIndex,boneIndex,i, normalizedPrevJoint[i]);
    }
    for (i=0 ; i<3 ; i++) {
        oneFrameOfData.set(fingerIndex,boneIndex,i+3, normalizedNextJoint[i]);
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
    clear();
    if (trainingCompleted == false) {
        Train();
        trainingCompleted = true;
    }
    HandleFrame(frame);

    

})
