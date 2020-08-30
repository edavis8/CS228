var controllerOptions = {};
var i = 0;
var x = window.innerWidth/2;
var y = window.innerHeight/2;
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
}
Leap.loop(controllerOptions, function(frame)
{
HandleFrame(frame);
}
)

