const knnClassifier = ml5.KNNClassifier();
controllerOptions= {};
var weight = 3;
var a = 1;
var trainingCompleted = false;
var numSamplesZero;
var numSamplesOne;
var numSamplesTest;
var testingSampleIndex = 0;
var predictedLabel;
var features;
var currentTestingSample;
var i = 0;
var timeLeft=5;
var rawXmin, rawXmax, rawYmin, rawYmax;
var previousNumHands=0;
var features;
var currentNumHands=0;
var numSamples = 100 ;
var oneFrameOfData = nj.zeros([5,4,6]);
var digitToShow = 0;
nj.config.printThreshold = 1000;
rawXmin = -250; rawXmax = 250; rawYmax = 400; rawYmin = 20;
var m = 0;
var n = 2;
var d = digitToShow;
var goal = 0.5;
var programState = 0;
var farRight = false; var farLeft = false; var farForward = false;
var farBack = false; farHigh = false;
var centeredXMean;
var centeredYMean;
var centeredZMean;
var username;
var hoverCount=0;
var hoverAnswer = false;
//var one_score =0; var two_score=0; var three_score=0; var four_score=0; var five_score; var six_score; var seven_score; var eight_score; var nine_score;
var scores = [];
var choices;
for (i=0;i<10;i++) {
    scores[i] =3;
}


var accuracyCount = [];
for (i=0;i<10;i++) {
    accuracyCount[i] =0;
}

var correct = [];
for (i=0;i<10;i++) {
    correct[i] =0;
}


var attempts = [];
for (i=0;i<10;i++) {
     attempts[i] =0;
}

var accuracyList = [];
for (i=0;i<10;i++) {
    accuracyList[i]=0;
}






var level =3;
var imageTime = 0;
var switchTime = 5;
var levelUp = false;
var showImage = true;
var timeSinceLastDigitChange = new Date();
var diffInSeconds=0;
var diffInMilliseconds;
var currentTime;
var c;
var prevDataList;
var myBarData = [];
for (i=0;i<10;i++) {
    myBarData[i] = Math.random();
}
var barData;
var myPrevData = Array.from(Array(10), () => 0);;
var xNums;

var pauseClick = false;

function GotResults(err,result) {
        c = result.label;
        d = digitToShow;
        m = ((n-1)*m + (c==d))/n;
        n+=1
     //   console.log(d, c, m);
        
        testingSampleIndex += 1;
        if (testingSampleIndex == numSamplesTest) {
            testingSampleIndex =0;
        }
}

function Train() {
    numSamplesZero = train0.shape[3];
    numSamplesOne = train1.shape[3];
    for (i = 0; i < numSamplesZero; i++) {
        console.log('Training step'+i.toString());
        features = train0.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 0);
 
        features = train0Bongard.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 0);  
    
        features = train1Bongard.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 1);  
       
        features = train1.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 1);  

        features = train1Li.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 1);  

        features = train2.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 2);

        features = train2Obrien.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 2);
       
        features = train2Neff.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 2);
        
        features = train2Jing.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 2);
        
        features = train2Jimmo.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 2);

        features = train2Bongard.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 2);
        
        features = train3.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 3);
        
        features = train3Li.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 3);
        
        features = train4.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 4);

        features = train5Bert.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 5);
        
        features = train5Shi.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 5);
        
        features = train5.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 5);
        
        features = train6.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 6);        

        features = train7.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 7); 
        
        features = train8.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 8);         
        
        features = train8Matthews.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 8);           
        
        features = train9.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 9); 
        
        features = train9He.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 9); 
        
        features = train9Bongard.pick(null,null,null,i);
        CenterData(features);
        features = features.reshape(1,120);
        knnClassifier.addExample(features.tolist(), 9); 
        
        
}
console.log('done training');
}

function Test() {
    dataCopy = oneFrameOfData.clone();
    CenterData(dataCopy);
    features = dataCopy.reshape(1,120);
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
    for (currentRow = 0 ; currentRow < 5 ; currentRow++ ) {
        for (currentColumn = 0 ; currentColumn <4; currentColumn++) {
           var currentX = data.get(currentRow,currentColumn,0);
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
    centeredXMean = xValues.mean();
    yValues = data.slice([],[],[1,6,3]);
    centeredYMean = yValues.mean(); 
    zValues = data.slice([],[],[2,6,3]);
    centeredZMean = zValues.mean(); 
}

function HandleFrame (frame) {
    if (pauseClick == false){
        image(pause,0,0,window.innerWidth/16, window.innerHeight/16);
    }
    else if (pauseClick == true) {
        image(play,0,0,window.innerWidth/16, window.innerHeight/16);
    }
    var InteractionBox = frame.interactionBox;
    previousNumHands = currentNumHands;
    if (frame.hands.length == 1) {
      var hand = frame.hands[0];
      currentNumHands = 1;
      HandleHand(hand, InteractionBox);
        
}
    else if (frame.hands.length == 2) {
//      console.log('2hands');
      var hand = frame.hands[0]; 
      var hand2 = frame.hands[1];
//          console.log(hand.type);
//          if (hand.type == 'left') {
      HandleHand(hand, InteractionBox);
      HandleHand(hand2, InteractionBox);
//          }
//          if (hand.type == 'right') {
//              HandleHand(hand, InteractionBox);
//          }
      currentNumHands = 2;
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
//        console.log(hand.type);
        for (i=0;i<4;i++) {
 
            var finger =fingers[j];
            var bone = finger.bones[i];
            HandleBone(bone, i, j, InteractionBox, hand.type);
            a+=-50;
            weight+= -1
            }
   
    }
    }

function HandleBone(bone, boneIndex, fingerIndex, InteractionBox, side) {
    var xb,yb,zb;
    var xt,yt,zt;
    [xb,yb,zb] = bone.prevJoint;
    var normalizedPrevJoint = InteractionBox.normalizePoint(bone.prevJoint, clamp = true);


    [xt,yt,zt] = bone.nextJoint;
    var normalizedNextJoint= InteractionBox.normalizePoint(bone.nextJoint, clamp = true);
    if (side != 'left'){
//console.log('not left');
        for (i=0 ; i<3; i++ ) {
            oneFrameOfData.set(fingerIndex,boneIndex,i, normalizedPrevJoint[i]);
        }
        for (i=0 ; i<3 ; i++) {
            oneFrameOfData.set(fingerIndex,boneIndex,i+3, normalizedNextJoint[i]);
        }
    }

    var canvasXp = window.innerWidth/2 * normalizedPrevJoint[0];
    var canvasYp = window.innerHeight/2 * (1 - normalizedPrevJoint[1]);
    var canvasXn = window.innerWidth/2 * normalizedNextJoint[0];
    var canvasYn = window.innerHeight/2 * (1 - normalizedNextJoint[1]);
    if (side == 'left'){
        if (canvasXn <= window.innerWidth/16 && canvasYn <= window.innerHeight/16) {
            hoverCount += 1;
//            console.log('on target');
            if (pauseClick == false && hoverCount >40) {
              pauseClick = true;
              hoverCount=0;
            }
            else if (pauseClick == true && hoverCount >80) {
                pauseClick = false;
                hoverCount=0;
            }
        }
        if (programState == 'paused') {
//            hoverAnswer = false;
            if (canvasXn <= (window.innerWidth/6 + window.innerWidth/16) && canvasXn >= (window.innerWidth/6 - window.innerWidth/16) && canvasYn <= window.innerHeight/16) {
                hoverAnswer = true;
                console.log('target');
                }
            console.log(hoverAnswer);
        }
    }
       
    if (currentNumHands>=1){
//        stroke(50+155*(1-m),50+155*m,50, a);
        stroke(50,50,50, a);
        strokeWeight(weight*10);
        line(canvasXp, canvasYp,canvasXn,canvasYn);
    }
}



function HandIsUncentered(){
    xValues = oneFrameOfData.slice([],[],[0,6,3]);

    centeredXMean = xValues.mean();

    yValues = oneFrameOfData.slice([],[],[1,6,3]);
    centeredYMean = yValues.mean(); 
    zValues = oneFrameOfData.slice([],[],[2,6,3]);
    centeredZMean = zValues.mean(); 

    if (centeredXMean<0.25) {
        return true
    }
    else if (centeredXMean>0.75){
        return true
    }       
    else if (centeredZMean<0.25) {
        return true
           
    }
    else if (centeredZMean>0.75) {       
        return true
    }
    else if (centeredYMean>0.75) {      
        return true
        
    }
    else {
        return false
    }
    
}






function DetermineState(frame) {
    if (pauseClick == true) {
        programState = 'paused';
    }
    else if (frame.hands.length == 1 && HandIsUncentered()) {
        programState = 1;
}
    else if (frame.hands.length == 0) {
        programState = 0 ;
}
    else if (frame.hands.length > 0){
        programState = 2;
    }
//    else if (frame.hands.length == 2){
//        programState = 3;
//    }
}

function HandleState0(frame) {
 //   DrawImageToHelpUserPutTheirHandOverTheDevice();
    timeSinceLastDigitChange = new Date();
    guide.resize(window.innerWidth/2,window.innerHeight/2);
    image(guide,0,0);
}

function HandlePause(frame) {
    hoverAnswer = false;
    timeSinceLastDigitChange = new Date();
    image(getAnswer,window.innerWidth/6,0,window.innerWidth/12, window.innerHeight/12);
    HandleFrame(frame);
    DrawLowerRightPanel();
    textSize(52);
    text("Paused", window.innerWidth/1.5, window.innerHeight/4);
    fill(100,100,100);
    if (hoverAnswer == true) {
        console.log('got here');
        digit_image.resize(window.innerWidth/2,window.innerHeight/2);
        image(digit_image, window.innerWidth/2, window.innerHeight/2); 
    }
    

}

function HandleState1(frame) {
        HandleFrame(frame);
        HandIsUncentered();
    if (centeredXMean<0.25) {
        tooLeft.resize(window.innerWidth/2,window.innerHeight/2);
        image(tooLeft,window.innerWidth/2,0);
    }
    else if (centeredXMean>0.75){
    tooRight.resize(window.innerWidth/2,window.innerHeight/2);
    image(tooRight,window.innerWidth/2,0); 
    }       
    else if (centeredZMean<0.25) {
    tooFar.resize(window.innerWidth/2,window.innerHeight/2);
    image(tooFar,window.innerWidth/2,0); 
    }
    else if (centeredZMean>0.75) {
    tooClose.resize(window.innerWidth/2,window.innerHeight/2);
    image(tooClose,window.innerWidth/2,0);        
    }
    else if (centeredYMean>0.75) {
    tooHigh.resize(window.innerWidth/2,window.innerHeight/2);
    image(tooHigh,window.innerWidth/2,0);              
    }
}

function DrawLowerRightPanel() {   
    console.log(digitToShow);
    digit_image = imgs[digitToShow];
//    console.log('diff', diffInSeconds);
    
    if (level == 3) {
        questions[digitToShow].resize(window.innerWidth/2,window.innerHeight/2);
        image(questions[digitToShow] , window.innerWidth/2, window.innerHeight/2);  
        pics[digitToShow].resize(window.innerWidth/2,window.innerHeight/2);
        image(pics[digitToShow], window.innerWidth/2, 0);
//        textSize(52);
        time_imgs[timeLeft].resize(window.innerWidth/8,window.innerHeight/8);        
        image(time_imgs[timeLeft],window.innerWidth/2, window.innerHeight/2);
    }
    else if (diffInSeconds < imageTime){
        digit_image.resize(window.innerWidth/2,window.innerHeight/2);
        image(digit_image, window.innerWidth/2, window.innerHeight/2);    
    }
    else if (level == 2) {
        textAlign(CENTER);
        textSize(52);
        text(digitToShow, window.innerWidth*(3/4), window.innerHeight*(3/4));        
    }
    else{
        textAlign(CENTER);
        textSize(52);
        text(digitToShow, window.innerWidth*(3/4), window.innerHeight*(3/4)); 
    }

    
}

function DetermineSwitchDigits() {
    if (TimeToSwitchDigits() && level == 2) {
      //  console.log('switchtrue?', TimeToSwitchDigits() && level == 2)
        SwitchDigits();
//        showImage = false;
        timeSinceLastDigitChange = new Date();
    }

    else if ((TimeToSwitchDigits() && level == 3) || (DetermineNextDigit() && level == 3)) {
      //  console.log('switchtrue?', TimeToSwitchDigits() && level == 2)
        SwitchDigits();
//        showImage = false;
        timeSinceLastDigitChange = new Date();
    }
        
    
    else if (TimeToSwitchDigits() && DetermineNextDigit()) {
        SwitchDigits();
//        showImage = true;
        timeSinceLastDigitChange = new Date();
    }
    
}

function TimeToSwitchDigits() {
    currentTime = new Date();
    diffInMilliseconds = Math.abs(currentTime - timeSinceLastDigitChange);
    diffInSeconds = diffInMilliseconds/1000;
    timeLeft = Math.round(switchTime - diffInSeconds);
    if (timeLeft<0){
        timeLeft=0;
    }
//    console.log('time left', timeLeft);
//    console.log('diff', diffInSeconds);
//    if (diffInSeconds > imageTime && level > 0) {
//        showImage = false;
//    }
//    else {
//        showImage = true;
//    }
    if (diffInSeconds > switchTime) {
        return true;
    }
    else {
        return false;  
    }
    
}

function SwitchDigits() { 

    if (digitToShow<10 && level==3) {
        if (DetermineNextDigit()){
            correct[digitToShow] += 1;
        }
        attempts[digitToShow] += 1;
        
        accuracyList[digitToShow] = correct[digitToShow]/attempts[digitToShow];
        
//        accuracyCount[digitToShow] = n;
//        accuracyList[digitToShow] = m;
//        digitToShow+=1;
//        if (digitToShow >= 9) {
//            digitToShow=0;
//        }
        
        
        var newDigitToShow = _.sample(choices);
        while (newDigitToShow == digitToShow) {
            newDigitToShow = _.sample(choices)
        }
        digitToShow = newDigitToShow;
        console.log(digitToShow);
        console.log(choices );
        
//        showImage = true;
    
        m = accuracyList[digitToShow];
        n = accuracyCount[digitToShow];
    }
    
    else if (digitToShow<9 && level==2) {
        if (m > goal){
            scores[digitToShow] += 1;
        }
        
        correct[digitToShow] += 1;
        attempts[digitToShow] += 1;
        
        accuracyList[digitToShow] = correct[digitToShow]/attempts[digitToShow];
        
//        accuracyCount[digitToShow] = n;
//        accuracyList[digitToShow] = m;
        
        digitToShow +=1;
//        showImage = true;
    
        m = accuracyList[digitToShow];
        n = accuracyCount[digitToShow];
    }
    else if (digitToShow==9 && level==2 ){
        if (m > goal){
            scores[digitToShow] += 1;
        }
        correct[digitToShow] += 1;
        attempts[digitToShow] += 1;
        
        accuracyList[digitToShow] = correct[digitToShow]/attempts[digitToShow];
        
        
        digitToShow =1;
//        showImage = true;
        m = accuracyList[digitToShow];
        n = accuracyCount[digitToShow];        
    }
    else if (DetermineNextDigit() && digitToShow<9) {
        scores[digitToShow] += 1;
        
        correct[digitToShow] += 1;
        attempts[digitToShow] += 1;
        
        accuracyList[digitToShow] = correct[digitToShow]/attempts[digitToShow];
        
        
        digitToShow +=1;
//        showImage = true;
        m = accuracyList[digitToShow];
        n = accuracyCount[digitToShow];
    }
    else if (DetermineNextDigit() && digitToShow==9 && level == 0) {
        levelUp = true;
        scores[digitToShow] += 1;
//        showImage = true;
        correct[digitToShow] += 1;
        attempts[digitToShow] += 1;
        
        accuracyList[digitToShow] = correct[digitToShow]/attempts[digitToShow];
        
        
        digitToShow = 1;
        m = accuracyList[digitToShow];
        n = accuracyCount[digitToShow];
    }
    else if (DetermineNextDigit() && digitToShow ==9 && level !=0) {
        scores[digitToShow] += 1;
        
        correct[digitToShow] += 1;
        attempts[digitToShow] += 1;
        
        accuracyList[digitToShow] = correct[digitToShow]/attempts[digitToShow];
        
        
        digitToShow = 1;
//        showImage = true;
        m = accuracyList[digitToShow];
        n = accuracyCount[digitToShow];
    }
    
}

function HandleState2(frame) {
    if (level == 0) {
        HandleLevel0(frame);
    }
    else if (level == 1) {
        HandleLevel1(frame);
    }
    else if (level == 2) {
        HandleLevel2(frame);
    }
    else if (level == 3) {
        HandleLevel3(frame);
    }
}

function DetermineNextDigit() {
    var performance = m;
//    if (performance > goal) {
    if (c == d) {
//        scores[digitToShow] = scores[digitToShow]+ 1;
        return true;
    }
//    if (performance < 0.1 && n > 50) {
//        n = 1;
//    }
    else {
        return false;
    }
}

function DetermineNextLevel() {
    if (levelUp) {
        level += 1;
        levelUp = false;
    }
    
}

function DetermineImageTime() {
//    console.log(scores);
    if (scores[digitToShow] < 3) {
        return 3 - scores[digitToShow];
    }
    
    else {
        return 0;
    }
}

function HandleLevel0(frame) {
    HandleFrame(frame);
//    Test();
    switchTime = 3;
    DetermineSwitchDigits();
    DetermineNextLevel();
    DrawLowerRightPanel();
}

function Level1Up() {
    for (i=0 ; i<10; i++) {
        if (scores[i] < 3) {
            return false;
        }
    }
    return true;
}

function HandleLevel1(frame) {
    HandleFrame(frame);
//    Test();
    goal = 0.5;
    switchTime = 3;
    imageTime = DetermineImageTime();
 //   console.log('imgtime', imageTime);
    DetermineSwitchDigits();
//    levelUp = Level1Up();
    DetermineNextLevel();
    DrawLowerRightPanel();
}


function Level2Time() {
    if (scores[digitToShow]<6){
        return 3 - 0.5*(scores[digitToShow] - 3);
    }
    else {
        return 1.5;
    }
}


function HandleLevel2(frame) {
    goal = 0.5;
    showImage = false;
    HandleFrame(frame);
//    Test();
    switchTime = Level2Time();
//    console.log('switchtime', switchTime);
    DetermineSwitchDigits();
    DetermineNextLevel();
    DrawLowerRightPanel();    
}
//function DeterminePrevLevel() {
    
//}

function Level3Time(accuracy) {
    if (accuracy>=0.8) {
        return 2;
    }
    else if (0.7<=accuracy && accuracy<0.8) {
        return 3;
    }
    else if (0.6<=accuracy && accuracy<0.7) {
        return 4;
    }
    else if (accuracy<0.6) {
        return 5;
    }
}

function HandleLevel3(frame) {
    HandleFrame(frame);
    Test();
    goal = 0.5;
    switchTime = Level3Time(accuracyList[digitToShow]);
//    console.log('st', switchTime, 'acc', accuracyList[digitToShow], 'res', Level3Time(accuracyList[digitToShow]));
//    imageTime = DetermineImageTime();;
//    console.log('imgtime', imageTime);
    DetermineSwitchDigits();
//    levelUp = Level1Up();
    DetermineNextLevel();
    DrawLowerRightPanel();
}


function CreateChoiceProbability() {
    choices = [];
    dex =0
    var rep;
    for (i=0;i<10;i++) {
        if (accuracyList[i] >=0.8) {
            rep =1;
        }
        else if (0.7<=accuracyList[i] && accuracyList[i]<0.8) {
            rep = 2;
        }
        else if (0.6<=accuracyList[i] && accuracyList[i]<0.7) {
            rep =3;
        }
        else if (accuracyList[i]<0.6) {
            rep= 4;
        }
        for (j=0;j<rep;j++) {
            choices[dex] =i;
            dex+=1;
        }
    }
}

function IsNewUser(username, list) {
    var usernameFound = false;
    var users = list.children;
    for (i=0 ; i<users.length; i++){
//        console.log(username);
//        console.log(users[i].innerHTML)
        if (username == users[i].innerHTML) {
            usernameFound = true;
        }
    }
//    console.log(usernameFound ==false);
    return usernameFound == false;
}

function CreateNewUser(username, list) {
    var item = document.createElement('li');
    item.innerHTML = String(username);
    item.id = String(username)+'_name'
    list.appendChild(item); 

//        console.log(list);
    var users = list.children;
//        console.log(users);    
}

function CreateSignInItem(username, list){        
    item = document.createElement('li');
    item.innerHTML = 1;
    item.id = String(username)+'_signins'
    list.appendChild(item); 

}

function SignIn() {
    username = document.getElementById('username').value;
//    console.log(username);
    myPrevData = Array.from(Array(10), () => 0);
    var ul = document.getElementById("users");
    var items = ul.getElementsByTagName("li");
    
    for (i = 0; i < items.length; ++i) {
        var item = items[i];
        spl = item.id.split('_');
        if (spl[2] == "accuracy" && spl[0] ==username) {
             myPrevData[spl[1]] = myPrevData[spl[1]] + parseFloat(item.innerHTML);
           }
    }
//    console.log(myPrevData);
    

    
    
    var list = document.getElementById('users');
    if (IsNewUser(username, list)) {
        CreateNewUser(username, list);
        CreateSignInItem(username,list);
        var numPast = document.getElementById('num_past_users');
        numPast.innerHTML = parseInt(numPast.innerHTML)+1;
    }
    else {
        
        for (i=0;i<10;i++) {        
            var pastNum = parseInt(document.getElementById(username+"_signins").innerHTML);
           // console.log(pastNum);
            myPrevData[i] = myPrevData[i]/pastNum;
           }
        
        ID = String(username + "_signins");
        listItem = document.getElementById(ID);
        listItem.innerHTML = parseInt(listItem.innerHTML)+1;     
    }
    for (i=0;i<10;i++) {
        item = document.createElement('li');
        item.innerHTML = String(i);
        item.id = String(username) +'_' +String(i)+'_num';
        list.appendChild(item); 
        
        item = document.createElement('li');
        item.innerHTML = 0;
        item.id = String(username) + '_' + String(i)+'_attempts';
        list.appendChild(item);
        
        item = document.createElement('li');
        item.innerHTML = 0;
        item.id = String(username) + '_' +String(i)+'_accuracy';
        list.appendChild(item); 
    }
//    console.log(list.innerHTML);
    return false;

}

function UpdateUserData(){
    for (i=0;i<10;i++) {
        item = document.getElementById(username+'_'+toString(i)+'_attempts');
        item.innerHTML = attempts[i];
        
        item = document.getElementById(username+'_'+toString(i)+'_accuracy');
        item.innerHTML = accuracyList[i];
    }
}


function GetPrevData() {
//    prevDataList = document.getElementById('users');
//    console.log(prevDataList.innerHTML);
//    nodeList = document.get
    barData = Array.from(Array(10), () => 0);
    var ul = document.getElementById("users");
    var items = ul.getElementsByTagName("li");
    for (i = 0; i < items.length; ++i) {
     //   console.log(items[i].innerHTML, items[i].id);
        var item = items[i];
        spl = item.id.split('_');
        if (spl[2] == "accuracy") {
            barData[spl[1]] = barData[spl[1]] + parseFloat(item.innerHTML);
            if (spl[0] == username) {
                myPrevData[spl[1]] = myPrevData[spl[1]] + parseFloat(item.innerHTML);
            }
        }
    }
    for (i=0;i<10;i++) {        
        var pastNum = parseInt(document.getElementById("num_past_users").innerHTML);
   //     console.log(pastNum);
        barData[i] = barData[i]/pastNum;
    }
    xNums = [];
    for (i=0;i<10;i++) {
        xNums[i] = i;
    }
    
}

function PlotData() {
//    prevDataList = document.getElementById('users');
//    console.log(prevDataList.innerHTML);
//    nodeList = document.get
    
    var plotStyle = document.getElementById('myDiv').style;
    plotStyle.position = 'absolute';
    plotStyle.top = window.innerHeight/2 + 30;
    plotStyle.height = window.innerHeight/2 -30;
    plotStyle.width = window.innerWidth/2;
    
    var prevUsers = {
      x: xNums,
      y: barData,
      type: "bar",
      name: 'prev users',
      opacity: 0.4,
      marker: {
         color: 'green',
      },
    };
    var prevData = {
      x: xNums,
      y: myPrevData,
      type: "bar",
      name: 'my prev',
      opacity: 0.4,
      marker: {
         color: 'blue',
      },
    };
    var myData = {
      x: xNums,
      y: accuracyList,
      name: username+' data',
      type: "bar",
      opacity: 0.5,
      marker: {
         color: 'red',
      },
    };
//    console.log(myPrevData );
    var data = [prevUsers, myData, prevData];
    var layout = {barmode: "group",
            yaxis: {
                  title: '% correct', },
            xaxis: {
            title: 'digit',
            showticklabels: true,
            type: 'category',
        }
                 };

    Plotly.newPlot('myDiv', data, layout);
    
    
}

//console.log(programState);
Leap.loop(controllerOptions, function(frame)
{
    clear();
//    console.log('level', level);
    if (trainingCompleted == false) {
        GetPrevData();
        Train();
        trainingCompleted = true;
    }
    PlotData();
    DetermineState(frame);
//    console.log(programState);
    CreateChoiceProbability();
    if (programState == 0){
        HandleState0(frame);
    }
    else if (programState == 1){
        HandleState1(frame);
    }
    else if (programState ==2 ) {
        HandleState2(frame);
    }
    else if (programState == 'paused') {
        HandlePause(frame);
    }
//    if (trainingCompleted == false) {
//        Train();
//        trainingCompleted = true;
//    }    
//    HandleFrame(frame);

    

})
