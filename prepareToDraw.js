var guide;
var tooLeft;
var tooRight;
var tooHigh;
var tooFar;
var tooClose;
var imgs = [];
var pics = [];
var questions = [];
var answers = [];
var octopus_8; var octopus; var octopus_ans;
var dice_6; var dice_ans; var dice;
var dipper_7; var dipper_ans; var dipper;
var cat_9; var cat_ans; var cat;
var pause;
var play;
var getAnswer;
var time_imgs =[];
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    guide = loadImage('https://i.imgur.com/IAl57Ej.jpg');
    tooLeft = loadImage('https://i.imgur.com/ZjUSyfZ.jpg');
    tooRight = loadImage('https://i.imgur.com/lpAHmT3.jpg');
    tooClose = loadImage('https://i.imgur.com/MYU0IaL.jpg');
    tooFar = loadImage('https://i.imgur.com/x0v7kHp.jpg');
    tooHigh = loadImage('https://i.imgur.com/x4b4FbE.jpg');
    var zero_sign = loadImage('https://i.imgur.com/dNjiy18.jpg');
    var one_sign = loadImage('https://i.imgur.com/IU92Jt9.jpg');
    var two_sign = loadImage('https://i.imgur.com/XoirAzd.jpg');
    var three_sign = loadImage('https://i.imgur.com/Uo35sif.jpg');
    var four_sign = loadImage('https://i.imgur.com/WHzjpwC.jpg');
    var five_sign = loadImage('https://i.imgur.com/6c1dxAg.jpg');
    var six_sign = loadImage('https://i.imgur.com/FdW0BSQ.jpg');
    var seven_sign = loadImage('https://i.imgur.com/RQh3oUL.jpg');
    var eight_sign = loadImage('https://i.imgur.com/9B2ELHb.jpghttps://i.imgur.com/dNjiy18.jpg');
    var nine_sign = loadImage('https://i.imgur.com/Gbwh1BG.jpg');
    
    pause = loadImage('https://i.imgur.com/hv3iPQP.jpg');
    play = loadImage('https://i.imgur.com/d5IM2Ok.jpg');
    
    
    cat_9 = loadImage('https://i.imgur.com/EFXQNyt.jpg');
    cat = loadImage('https://i.imgur.com/biiiqb2.jpg');    
    
    octopus_8 = loadImage('https://i.imgur.com/7iVpwud.jpg');
    octopus_ans = loadImage('https://i.imgur.com/jv1YIsG.jpg'); 
    octopus = loadImage('https://i.imgur.com/0NILsnd.jpg'); 

    dipper_7 = loadImage('https://i.imgur.com/d4IRyZl.jpg');
    dipper_ans = loadImage('https://i.imgur.com/lFeUoTn.jpg'); 
    dipper = loadImage('https://i.imgur.com/CLmXBN6.jpg');  
    
    dice_6 = loadImage('https://i.imgur.com/f4EXYuI.jpg');
    dice_ans = loadImage('https://i.imgur.com/HRwGnQX.jpg'); 
    dice = loadImage('https://i.imgur.com/jwsl2FV.jpghttps://i.imgur.com/0NILsnd.jpg'); 
    
    hand = loadImage('https://i.imgur.com/DtG6V8U.jpg');
    hand_5 = loadImage('https://i.imgur.com/APOeAt6.jpg');
    
    dog = loadImage('https://i.imgur.com/QuRTYZN.jpg');
    dog_4 = loadImage('https://i.imgur.com/ovT79ah.jpg');
    
    tri = loadImage('https://i.imgur.com/L3WLESU.jpg');
    tri_3 = loadImage('https://i.imgur.com/Vw1SDBZ.jpg');
    
    bird = loadImage('https://i.imgur.com/ZO0tgt1.jpg');
    bird_2 = loadImage('https://i.imgur.com/FYcCkMp.jpg');
    
    sun = loadImage('https://i.imgur.com/72RtgCi.jpg');
    sun_1 = loadImage('https://i.imgur.com/LcWrYqV.jpg');
    
    desert = loadImage('https://i.imgur.com/KT2hmEh.jpg');
    desert_0 = loadImage('https://i.imgur.com/hvi3F5A.jpg');

    questions[0] = desert_0;
    questions[1] = sun_1;
    questions[2] = bird_2;
    questions[3] = tri_3;
    questions[4] = dog_4;
    questions[5] = hand_5;
    questions[6] = dice_6;
    questions[7] = dipper_7;   
    questions[8] = octopus_8;
    questions[9] = cat_9;
    
    answers[0] = desert;
    answers[1] = sun;
    answers[2] = bird;
    answers[3] = tri;
    answers[4] = dog;
    answers[5] = hand;
    answers[6] = dice_ans;
    answers[7] = dipper_ans;
    answers[8] = octopus_ans;
    
    pics[0] = desert;
    pics[1] = sun;
    pics[2] = bird;
    pics[3] = tri;
    pics[4] = dog;
    pics[5] = hand;
    pics[6] =dice;
    pics[7] = dipper;
    pics[8] =octopus;
    pics[9] = cat;
    
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

    time_imgs[0] = loadImage('https://i.imgur.com/uzk8k6T.jpg');
    time_imgs[1] = loadImage('https://i.imgur.com/PFfWG5k.jpg');
    time_imgs[2] = loadImage('https://i.imgur.com/6fQQnWh.jpg');
    time_imgs[3] = loadImage('https://i.imgur.com/5ZnqkFB.jpg');
    time_imgs[4] = loadImage('https://i.imgur.com/8WvdNYc.jpg');
    time_imgs[5] = loadImage('https://i.imgur.com/o17iNjN.jpg');
    
    getAnswer = loadImage('https://i.imgur.com/2DbvnZt.jpg');
    
//  img.resize(window.innerWidth,window.innerHeight);
    //  console.log('image loaded');
 // image(img, 0,0);
}
