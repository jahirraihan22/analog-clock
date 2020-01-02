var radius  = 0 ;
var dx = - 1;
var r, g, b;
var px,py;
var customFonts;
var x = 0, y = 0;

function preload(){
   customFonts = loadFont('FredokaOne-Regular.ttf');
}
    
function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {

    background(0);
    push();
    translate(200,200);
    rotate(-90);
    
    if(radius > height || radius == 0){
        dx = -dx;
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
    }
    radius += dx;
    
    push();
    strokeWeight(8);
    noFill();
    stroke(r,g,b);
    arc(0,0,radius,radius,0,360);
    pop(); 
    
    var sec = second();
    var min = minute();
    var hr = hour();
    
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
    pop();
    
    var hrtxt = (hr%12).toString();
    var mintxt = min.toString();
    var sectxt = sec.toString();
    
    if(hrtxt.length < 2){
        hrtxt = "0" + hrtxt;
    }
    
    if(mintxt.length < 2){
        mintxt = "0" + mintxt;
    }
    
    if(sectxt.length < 2){
        sectxt = "0"+ sectxt;
    }
    
    textSize(32);
    fill(r,g,b);
    textFont(customFonts);
    text(hrtxt + ' : ' + mintxt + ' : ' + sectxt,width/3,height - 10);
}
