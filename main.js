nose_X = 0;
nose_Y = 0;

function preload(){
clown_image = loadImage('https://i.postimg.cc/6qZqJSn1/clown-image-2.png');
}

function setup(){

    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size( 300 , 300);
    video.hide();

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}

function draw(){
image(video , 0 ,0 , 300 , 300);
fill(255 , 0 ,0);
stroke(0 , 0 , 255);
circle(nose_X + 5, nose_Y + 10 , 30 );
image(clown_image , nose_X - 10  , nose_Y - 6 , 30 , 30);
}

function take_snapshot(){
    save('myfilterimage.png')

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose X ="+results[0].pose.nose.x);
        console.log("nose Y ="+results[0].pose.nose.y);
        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
    }

}

function modelLoaded(){
    console.log("modelLoaded");
}