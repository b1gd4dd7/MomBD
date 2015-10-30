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

function playPauseVideo() {
	if (myVideo.paused) {
		myVideo.play();
	}else {
		myVideo.pause();
	}
}

function playAudio() {
	myAudio.play();
}

function makeBig() { 
	myVideo.width = 1000;
	var pp = document.getElementById("pp");
	pp.scrollIntoView();
}

function makeSmall() {
	myVideo.width = 400;
}

function playMuteAudio() {
	if (myAudio.paused) {
		myAudio.currentTime = 0;
		myAudio.play();
	}else {
		myAudio.pause();
	}
}
