noseX = 0;
noseY = 0;

musheX = 0;
musheY = 0;

hatX = 0;
hatY = 0;

sunglassesX = 0;
sunglassesY = 0;

filter = "none";


function preload() {
    clownnose = loadImage('https://i.postimg.cc/VLdBWFq1/clownnose.png');
    mushe = loadImage('https://i.postimg.cc/kXdrzwcN/mushe.png');
    hat = loadImage('https://i.postimg.cc/NjQ2jwbG/hat-removebg-preview.png');
    sunglasses = loadImage('https://i.postimg.cc/YqdMQKMC/s-removebg-preview.png');
    none = loadImage('https://i.postimg.cc/XJTKWnmj/white.jpg')
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
image(video,0,0,300,300);
if(filter == "clownnose") {
    image(clownnose, noseX, noseY, 30, 30);
}
 if(filter == "mushe") { 
    image(mushe, musheX, musheY, 60, 60);
}
 if(filter == "hat") {
    image(hat, hatX, hatY, 200, 200);
}
 if(filter == "sunglasses") {
    image(sunglasses, sunglassesX, sunglassesY, 100, 80);
}
if(filter == "none") {
    image(none, 1, 1, 1, 1);
}

}
function takesnapshot() {
    save('myfilterimage.png');
}
function modelLoaded() {
    console.log("PoseNet is intialized");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        if(filter == "clownnose") {
        noseX =  results[0].pose.nose.x - 15;
        noseY =  results[0].pose.nose.y - 15;
     console.log("nose X = " + noseX);
     console.log("nose Y= " +  noseY);
        }

     if(filter == "mushe") {
     musheX =  results[0].pose.nose.x - 30;
     musheY =  results[0].pose.nose.y - 10;
  console.log("mushe X = " + noseX);
  console.log("mushe Y= " +  noseY);
     }

  if(filter == "hat") {
  hatX =  results[0].pose.nose.x - 100;
  hatY =  results[0].pose.nose.y - 200;
console.log("hat X = " + hatX);
console.log("hat Y= " +  hatY);
  }

if(filter == "sunglasses") {
sunglassesX =  results[0].pose.nose.x - 50;
sunglassesY =  results[0].pose.nose.y - 60;
console.log("sunglasses X = " + sunglassesX);
console.log("sunglasses Y= " +  sunglassesY);
}
    }
} 
 function change() {
    filter = "clownnose";
     draw(); 
 }
 function change1() {
    filter = "mushe";
     draw(); 
 }
 function change2() {
    filter = "hat";
     draw(); 
 }
 function change3() {
    filter = "sunglasses";
     draw(); 
 }
 function change4() {
    filter = "none";
     draw(); 
 }