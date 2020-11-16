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
var rawXmin, rawXmax, rawYmin, rawYmax;
var previousNumHands=0;
var features;
var currentNumHands=0;
var numSamples = 100 ;
var oneFrameOfData = nj.zeros([5,4,6]);
var digitToShow = 0;
nj.config.printThreshold = 1000;
rawXmin = -250; rawXmax = 250; rawYmax = 400; rawYmin = 20;
var m = 0.4;
var n = 1;
var goal = 0.6;
var programState = 0;
var farRight = false; var farLeft = false; var farForward = false;
var farBack = false; farHigh = false;
var centeredXMean;
var centeredYMean;
var centeredZMean;
var one_score =0; var two_score=0; var three_score=0; var four_score=0; var five_score; var six_score; var seven_score; var eight_score; var nine_score;
var scores = [];


var timeSinceLastDigitChange = new Date();
function GotResults(err,result) {

        var c = result.label;
        var d = digitToShow;
        m = ((n-1)*m + (c==d))/n;
        n+=1
        console.log(d, c, m);
        
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
    var InteractionBox = frame.interactionBox;
    previousNumHands = currentNumHands;
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
    var canvasXp = window.innerWidth/2 * normalizedPrevJoint[0];
    var canvasYp = window.innerHeight/2 * (1 - normalizedPrevJoint[1]);
    var canvasXn = window.innerWidth/2 * normalizedNextJoint[0];
    var canvasYn = window.innerHeight/2 * (1 - normalizedNextJoint[1]);

    if (currentNumHands>=1){
        stroke(50+155*(1-m),50+155*m,50, a);
        strokeWeight(weight*10);
        line(canvasXp, canvasYp,canvasXn,canvasYn);
    }
}   

function DetermineState(frame) {
    if (frame.hands.length == 1 && HandIsUncentered()) {
        programState = 1;
}
    else if (frame.hands.length == 0) {
        programState = 0 ;
}
    else if (frame.hands.length == 1){
        programState = 2;
    }
}

function HandleState0(frame) {
 //   DrawImageToHelpUserPutTheirHandOverTheDevice();
    guide.resize(window.innerWidth/2,window.innerHeight/2);
    image(guide,0,0);
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
    digit_image = imgs[digitToShow];
    digit_image.resize(window.innerWidth/2,window.innerHeight/2);
    image(digit_image, window.innerWidth/2, window.innerHeight/2);    
}

function DetermineSwitchDigits() {
    if (TimeToSwitchDigits()) {
        SwitchDigits();
        timeSinceLastDigitChange = new Date();
    }
    
}

function TimeToSwitchDigits() {
    var currentTime = new Date();
    var diffInMilliseconds = currentTime -timeSinceLastDigitChange ;
    var diffInSeconds = diffInMilliseconds/1000;
    if (diffInSeconds > 3) {
        return true;
    }
    else {
        return false;  
    }
    
}

function SwitchDigits() {        
    if (DetermineNextDigit() && digitToShow<=9) {
        digitToShow +=1;
        m = 0.4;
        n = 1;
    }
//    else if (DetermineNextLevel() && digitToShow==9) {
//        DetermineNextLevel();
//    }
    
}

function HandleState2(frame) {
    if (level ==0) {
        HandleLevel0();
    }
    else if (level == 1) {
        HandleLevel1();
    }
    else if (level == 2) {
        HandleLevel2();
    }
    HandleFrame(frame);
    Test();
    DrawLowerRightPanel();
    DetermineSwitchDigits();
}

function HandIsUncentered(){
    xValues = oneFrameOfData.slice([],[],[0,6,3]);
//    console.log(xValues.mean());
    centeredXMean = xValues.mean();
 //   console.log(centeredXMean);
    yValues = oneFrameOfData.slice([],[],[1,6,3]);
    centeredYMean = yValues.mean(); 
    zValues = oneFrameOfData.slice([],[],[2,6,3]);
    centeredZMean = zValues.mean(); 
//    console.log(centeredXMean);
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
    console.log(usernameFound ==false);
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
    var username = document.getElementById('username').value;
//    console.log(username);
    var list = document.getElementById('users');
    if (IsNewUser(username, list)) {
        CreateNewUser(username, list);
        CreateSignInItem(username,list);
    }
    else {
        ID = String(username + "_signins");
        listItem = document.getElementById(ID);
        listItem.innerHTML = parseInt(listItem.innerHTML)+1     
    }
    for (i=0;i<10;i++) {
        item = document.createElement('li');
        item.innerHTML = String(i);
        item.id = String(username) +'_' +String(i)+'_num';
        list.appendChild(item); 
        
        item = document.createElement('li');
        item.innerHTML = 'attempts';
        item.id = String(username) + '_' + String(i)+'_attempts';
        list.appendChild(item);
        
        item = document.createElement('li');
        item.innerHTML = 'accuracy';
        item.id = String(username) + '_' +String(i)+'_accuracy';
        list.appendChild(item); 
    }
    console.log(list.innerHTML);
    return false;

}


function DetermineNextDigit() {
    var performance = m;
    if (performance > goal) {
        return true
    }
    if (performance < 0.3) {
        n = 1;
    }
    else {
        return false
    }
}

function DetermineNextLevel() {
    
}


function HandleLevel1() {
    
}

function HandleLevel2() {
    
}

function HandleLevel3() {
    
}
//function DeterminePrevLevel() {
    
//}


console.log(programState);
Leap.loop(controllerOptions, function(frame)
{
    clear();
    if (trainingCompleted == false) {
        Train();
        trainingCompleted = true;
    }
    DetermineState(frame);
    if (programState == 0){
        HandleState0(frame);
    }
    else if (programState == 1){
        HandleState1(frame);
    }
    else if (programState ==2 ) {
        HandleState2(frame);
    }
//    if (trainingCompleted == false) {
//        Train();
//        trainingCompleted = true;
//    }    
//    HandleFrame(frame);

    

})
