var controllerOptions = {};
var i = 0;
var x = window.innerWidth/2;
var y = window.innerHeight/2;
Leap.loop(controllerOptions, function(frame)
{
clear()
circle(x,y,50);
var dx = Math.floor(Math.random()*3)-1;
var dy = Math.floor(Math.random()*3)-1;
x+=dx;
y+=dy;
//console.log(i);
//i+=1;
}
)

