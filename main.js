
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "Take my selfie"){
     console.log("taking your selfie");
     speak();
    }
    
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_selfie();
        save();
    },5000);

}
camera = document.getElementById("camera");
Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 90
});

 function take_selfie(){
   Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = "<img id ='my_selfie' src=' "+data_uri+"></img>";
   });
 }
 

 function save(){
     link = document.getElementById("link");
     image = document.getElementById("my_selfie").src;
     link.href = image;

     link.click();
 }