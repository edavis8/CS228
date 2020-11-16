var guide;
var tooLeft;
var tooRight;
var tooHigh;
var tooFar;
var tooClose;
var imgs = []
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    guide = loadImage('https://i.imgur.com/IAl57Ej.jpg');
    tooLeft = loadImage('https://i.imgur.com/ZjUSyfZ.jpg');
    tooRight = loadImage('https://i.imgur.com/lpAHmT3.jpg');
    tooClose = loadImage('https://i.imgur.com/MYU0IaL.jpg');
    tooFar = loadImage('https://i.imgur.com/x0v7kHp.jpg');
    tooHigh = loadImage('https://i.imgur.com/x4b4FbE.jpg');
var   zero_sign = loadImage('https://i.imgur.com/dNjiy18.jpg');
var    one_sign = loadImage('https://i.imgur.com/IU92Jt9.jpg');
var    two_sign = loadImage('https://i.imgur.com/XoirAzd.jpg');
var    three_sign = loadImage('https://i.imgur.com/Uo35sif.jpg');
var    four_sign = loadImage('https://i.imgur.com/WHzjpwC.jpg');
var    five_sign = loadImage('https://i.imgur.com/6c1dxAg.jpg');
var    six_sign = loadImage('https://i.imgur.com/FdW0BSQ.jpg');
var    seven_sign = loadImage('https://i.imgur.com/RQh3oUL.jpg');
var    eight_sign = loadImage('https://i.imgur.com/9B2ELHb.jpghttps://i.imgur.com/dNjiy18.jpg');
var    nine_sign = loadImage('https://i.imgur.com/Gbwh1BG.jpg');

    imgs[0] = zero_sign;
    imgs[1] = one_sign;
    imgs[2] = two_sign;
    imgs[3] = three_sign;
    imgs[4] = four_sign;
    imgs[5] = five_sign;
    imgs[6] = six_sign;
    imgs[7] = seven_sign;
    imgs[8] = eight_sign;
    imgs[9] = nine_sign;

    
//  img.resize(window.innerWidth,window.innerHeight);
    //  console.log('image loaded');
 // image(img, 0,0);
}
