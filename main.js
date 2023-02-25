difference =0 ;

function setup () {
canvas=createCanvas(550,500) ;
canvas.position(560,150) ;
video=createCapture(VIDEO) ;
video.size(550,500) ;

poseNet=ml5.poseNet(video , modelloaded);
poseNet.on("pose",gotrsults);
}

function draw() {
background("grey") ;
textSize(difference) ;
fill("blue") ;
text("Kavish", 100 , 200) ;
}

function modelloaded() {
    console.log("Model is loaded") ;
}

function gotrsults (results) {
    if(results.length>0) {
        console.log(results) ;
        leftWristX = results[0].pose.leftWrist.x ;
        rightWristX = results[0].pose.rightWrist.x ;
        difference = floor( leftWristX - rightWristX ) ;
    }
}