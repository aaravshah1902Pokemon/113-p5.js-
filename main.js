function preload(){
   
}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,230,150,220,200);
    fill(255,16,92);
    stroke(249,15,52);
    circle(50,50,75);
    circle(50,420,75);
    circle(600,420,75);
    circle(600,50,75);
    fill(12,245,1);
    stroke(12,245,1);
    rect(90,40,475,20);
    rect(90,415,475,20);
    rect(40,85,20,300);
    rect(590,85,20,300);
}
function take_snapshot(){
    save('framepic.png');
}
