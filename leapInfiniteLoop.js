var controllerOptions = {};
var i = 0;
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
        if (fingers[i].type == 1) {
            finger = fingers[i];
            HandleFinger(finger)
        }
}
}
function HandleFinger (finger) {
    console.log(finger.tipPosition)
    var x,y,z;
    [x,y,z] = finger.tipPosition;
    var rawXmin, rawXmax, rawYmin, rawYmax;
    rawXmin = -250; rawXmax = 250; rawYmax = 400; rawYmin = 20;
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
    var x2 = map(x, rawXmin,rawXmax,50,window.innerWidth-50);
//    if (x2 < 50) {
//        x2 = 50
//    }
//    if (x2 > window.innerWidth-50) {
//        x2 = window.innerWidth-50
//    }
    var y2 = map(y, rawYmin,rawYmax,window.innerHeight-50,50, true);
//    if (y2 < 50) {
//        y2 =50
//    }
//    if (y2 > window.innerHeight-50) {
//        y2 = window.innerHeight-50
//    }
    console.log(innerHeight);
    circle(x2,y2, 50);
    console.log(y2);
    
}
Leap.loop(controllerOptions, function(frame)
{
    clear();
    HandleFrame(frame);
}
)

