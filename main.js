var img = document.querySelector('img');
var ind = 1;
var images = ["dog-headphone.jpg","dog-smile.jpg","mouth-dog.jpg","tutu.jpg"];


setInterval(nextImage, 5000);
function nextImage() {
	ind++;
	document.getElementById("pic").src = "img/" + images[ind % 4];
}

var myVideo = document.getElementById("video");
var myAudio = document.getElementById("audio");

function playAudio() {
	myAudio.play();
}

function makeBig() { 
	myVideo.width = 1000;
	myVideo.height = 788;
	var pp = document.getElementById("AudioButton2");
	pp.scrollIntoView();
}

function makeSmall() {
	myVideo.width = 420;
	myVideo.height = 315;
}

function playMuteAudio() {
	if (myAudio.paused) {
		myAudio.currentTime = 0;
		myAudio.play();
	}else {
		myAudio.pause();
	}
}
