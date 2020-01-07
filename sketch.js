var radius  = 0 ;
var dx = - 1;
var r, g, b;
var px,py;
var customFonts;
var x = 0, y = 0;
var am_pm = "";
function preload(){
   customFonts = loadFont('FredokaOne-Regular.ttf');
}
    
function setup() {
    createCanvas(600, 420);
    angleMode(DEGREES);
}

function draw() {

    background(0);
    push();
    translate(300,200);
    rotate(-90);
    if(radius > 240 || radius == 0){
        dx = - dx;
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
    }
    radius += dx;
    
    push();
    strokeWeight(8);
    noFill();
    stroke(b,g,r);
    arc(0,0,350,350,0,360);
    pop();
    
    push();
    strokeWeight(8);
    noFill();
    stroke(r,g,b);
    arc(0,0,radius,radius,0,360);
    pop(); 
    
    var sec = second();
    var min = minute();
    var hr = hour();
    if(hr > 12){
        am_pm = " PM";
    }
    else{
        am_pm = " AM";
    }
    
    strokeWeight(8);
    noFill();
    stroke(255,180,123);
    let secAngle = map(sec , 0, 60,0, 360);
    arc(0,0,300,300,0,secAngle);
    
    stroke(200,134,255);
    let minAngle = map(min , 0, 60,0, 360);
    arc(0,0,280,280,0,minAngle);
    
    stroke(127,255,103);
    let hourAngle = map(hr % 12 , 0, 12,0, 360);
    arc(0,0,260,260,0,hourAngle);
    
    push();
    stroke(255,180,123);
    rotate(secAngle);
    line(0, 0, 100, 0);
    pop();
    
    push();
    rotate(minAngle);
    stroke(200,134,255);
    line(0, 0, 80, 0);
    pop();
    
    push();
    stroke(127,255,103);
    rotate(hourAngle)
    line(0, 0, 60, 0);
    pop();
    
    stroke(255);
    point(0,0);
    
    push();
    rotate(-70);
    textSize(32);
    fill(r,g,b);
    textFont(customFonts);
    for(let i = 0 ; i < 360; i+=30){
        rotate(30 -.6);
        stroke(g,r,b);
        point(115,115);
    }
    pop();
   
    pop();
    var hourTxt = (hr%12).toString();
    var minTxt = min.toString();
    var secTxt = sec.toString();
    
    if(hourTxt.length < 2){
        hourTxt = "0" + hourTxt;
    }
    
    if(minTxt.length < 2){
        minTxt = "0" + minTxt;
    }
    
    if(secTxt.length < 2){
        secTxt = "0"+ secTxt;
    }
    
    textSize(32);
    fill(r,g,b);
    textFont(customFonts);
    text(hourTxt + ' : ' + minTxt + ' : ' + secTxt + am_pm,width/3,height - 10);
}
