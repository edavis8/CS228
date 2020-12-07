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
var digitToShow = 6;
nj.config.printThreshold = 1000;
rawXmin = -250; rawXmax = 250; rawYmax = 400; rawYmin = 20;
var m = 0;
var n = 2;
var goal = 0.5;
var programState = 0;
var farRight = false; var farLeft = false; var farForward = false;
var farBack = false; farHigh = false;
var centeredXMean;
var centeredYMean;
var centeredZMean;
//var one_score =0; var two_score=0; var three_score=0; var four_score=0; var five_score; var six_score; var seven_score; var eight_score; var nine_score;
var scores = [];
for (i=0;i<10;i++) {
    scores[i] =3;
}

var accuracyList = [];
for (i=0;i<10;i++) {
    accuracyList[i] =0;
}

var accuracyCount = [];
for (i=0;i<10;i++) {
    accuracyCount[i] =0;
}



var level =3;
var imageTime = 0;
var switchTime = 3;
var levelUp = false;
var showImage = true;
var timeSinceLastDigitChange = new Date();
var diffInSeconds=0;
var diffInMilliseconds;
var currentTime;

var prevDataList;
var myBarData = [];
for (i=0;i<10;i++) {
    myBarData[i] = Math.random();
}


function GotResults(err,result) {
        var c = result.label;
        var d = digitToShow;
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
//        console.log('Training step'+i.toString());
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
    console.log('diff', diffInSeconds);
    
    if (level == 3) {
        questions[digitToShow].resize(window.innerWidth/2,window.innerHeight/2);
        image(questions[digitToShow] , window.innerWidth/2, window.innerHeight/2);  
        pics[digitToShow].resize(window.innerWidth/2,window.innerHeight/2);
        image(pics[digitToShow], window.innerWidth/2, 0);          
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
    
    else if (TimeToSwitchDigits() && DetermineNextDigit()) {
        SwitchDigits();
//        showImage = true;
        timeSinceLastDigitChange = new Date();
    }
    
}

function TimeToSwitchDigits() {
    currentTime = new Date();
    diffInMilliseconds = Math.abs(currentTime - timeSinceLastDigitChange) ;
    diffInSeconds = diffInMilliseconds/1000;
    console.log('diff', diffInSeconds);
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
    if (digitToShow<9 && level==2) {
        if (m > goal){
            scores[digitToShow] += 1;
        }
        
        accuracyCount[digitToShow] = n;
        accuracyList[digitToShow] = m;
        
        digitToShow +=1;
//        showImage = true;
    
        m = accuracyList[digitToShow];
        n = accuracyCount[digitToShow;
    }
    else if (digitToShow==9 && level==2 ){
        if (m > goal){
            scores[digitToShow] += 1;
        }
        digitToShow =1;
//        showImage = true;
        m = 0;
        n = 1;        
    }
    else if (DetermineNextDigit() && digitToShow<9) {
        scores[digitToShow] += 1;
        digitToShow +=1;
//        showImage = true;
        m = 0;
        n = 1;
    }
    else if (DetermineNextDigit() && digitToShow==9 && level == 0) {
        levelUp = true;
        scores[digitToShow] += 1;
//        showImage = true;
        digitToShow = 1;
        m = 0;
        n = 1;
    }
    else if (DetermineNextDigit() && digitToShow ==9 && level !=0) {
        scores[digitToShow] += 1;
        digitToShow = 1;
//        showImage = true;
        m = 0;
        n = 1;
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
    if (performance > goal) {
//        scores[digitToShow] = scores[digitToShow]+ 1;
        return true;
    }
    if (performance < 0.1 && n > 50) {
        n = 1;
    }
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
    console.log(scores);
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
    console.log('imgtime', imageTime);
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
    console.log('switchtime', switchTime);
    DetermineSwitchDigits();
    DetermineNextLevel();
    DrawLowerRightPanel();    
}
//function DeterminePrevLevel() {
    
//}
function HandleLevel3(frame) {
    HandleFrame(frame);
//    Test();
    goal = 0.5;
    switchTime = 2;
//    imageTime = DetermineImageTime();
    console.log('imgtime', imageTime);
    DetermineSwitchDigits();
//    levelUp = Level1Up();
    DetermineNextLevel();
    DrawLowerRightPanel();
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
    var username = document.getElementById('username').value;
//    console.log(username);
    var list = document.getElementById('users');
    if (IsNewUser(username, list)) {
        CreateNewUser(username, list);
        CreateSignInItem(username,list);
        var numPast = document.getElementById('num_past_users');
        numPast.innerHTML = parseInt(numPast.innerHTML)+1;
    }
    else {
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
        item.innerHTML = Math.random();
        item.id = String(username) + '_' + String(i)+'_attempts';
        list.appendChild(item);
        
        item = document.createElement('li');
        item.innerHTML = Math.random();
        item.id = String(username) + '_' +String(i)+'_accuracy';
        list.appendChild(item); 
    }
    console.log(list.innerHTML);
    return false;

}

function GetPrevData() {
//    prevDataList = document.getElementById('users');
//    console.log(prevDataList.innerHTML);
//    nodeList = document.get
    var barData = Array.from(Array(10), () => 0);
    var ul = document.getElementById("users");
    var items = ul.getElementsByTagName("li");
    for (i = 0; i < items.length; ++i) {
        console.log(items[i].innerHTML, items[i].id);
        var item = items[i];
        spl = item.id.split('_');
        if (spl[2] == "accuracy") {
            barData[spl[1]] = barData[spl[1]] + parseFloat(item.innerHTML);
        }
    }
    for (i=0;i<10;i++) {        
        var pastNum = parseInt(document.getElementById("num_past_users").innerHTML);
        console.log(pastNum);
        barData[i] = barData[i]/pastNum;
    }
    var xNums = [];
    for (i=0;i<10;i++) {
        xNums[i] = i;
    }
    
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
      opacity: 0.5,
      marker: {
         color: 'green',
      },
    };
    var myData = {
      x: xNums,
      y: myBarData,
      name: 'my data',
      type: "bar",
      opacity: 0.6,
      marker: {
         color: 'red',
      },
    };

    var data = [prevUsers, myData];
    var layout = {barmode: "overlay",
            xaxis: {
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
//        Train();
        GetPrevData();
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
