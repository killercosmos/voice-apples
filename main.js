var x = 0;
var y = 0;
var screen_width = 0;
var screen_height = 0;
var apple = "";
var speak_data = "";
var to_number = "";
var draw_apple = "";

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition;




function start() {
    document.getElementById("Status").innerHTML = "System is listening. Please Speak"
    recognition.start()
}
function preload() {
    apple = loadImage("download (2).jpeg");
}
recognition.onresult = function(event) {
console.log(event);

var content = event.results[0][0].transcript;

to_number = Number(content);

document.getElementById("Status").innerHTML = "Speech has been recognized as :" + content;

if(Number.isInteger(to_number))
{
    document.getElementById("Status").innerHTML = "Drawing Apple";
    draw_apple = "set";

}
else{
    document.getElementById("Status").innerHTML = "Speech has not been recognized as a number";
}

}

function setup() {
    screen_height = window.innerHeight;
    screen_width = window.innerWidth;
    canvas = createCanvas(screen_width,screen_height-150);
    canvas.position(0,150);
    
}

function speak() {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}


function draw() {
    for(var i = 1; i <= to_number; i++){
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple,x,y,50,50);
    }

    document.getElementById("Status").innerHTML = to_number + "Apple Drawn";
    draw_apple = "";
}
speak_data = to_number + "apple drawn";
speak();
