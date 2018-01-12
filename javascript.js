// var audio = new Audio(),
//     i = 0;
// var playlist = new Array('alligator.mp3', 'hippo.mp3');

// function Playlist(){	

// audio.addEventListener('ended', function () {
//     i = ++i < playlist.length ? i : 0;
//     console.log(i)
//     audio.src = playlist[i];
//     audio.play();

// }, true);
// audio.loop = false;
// audio.src = playlist[0] ;
// audio.play();

// }

// var isPlaying = false;



// function Loop(){
// 		if(audio.play()){
// 			audio.loop = true;
// 		}else{
// 			audio.loop = false;
// 		}
// }

// function PlaySound(melody){
// 	var song = document.getElementById(melody);
// 	song.play();		
// }

// function PauseSound(melody){
// 	var song = document.getElementById(melody);
// 	song.pause();
// }

// function MuteSound(melody){
// 	var mute = document.getElementById(melody);
// 	mute.muted = true;
// }

// function UnmuteSound(melody){
// 	var unmute = document.getElementById(melody);
// 	unmute.muted = false;
// }

// function Reset(melody){
// 	var song = document.getElementById(melody)
// 	song.currentTime = 0;	
// }



function JukeBox(){

}

JukeBox.prototype.PlaySound = function(melody) {
	var playlist = new Array('song1.mp3', 'song2.mp3', 'song3.mp3', 'song4.mp3');
	var song = document.getElementById('song');
	document.getElementById('turntable').style.backgroundImage = 'url(SongPlaying.gif)';
	song.src = playlist[melody];
	song.play();
};
JukeBox.prototype.PauseSound = function() {
	var song = document.getElementById('song');
	document.getElementById('turntable').style.backgroundImage = 'url(SongPaused.jpg)';
	song.pause();
};
JukeBox.prototype.MuteSong = function() {
	var mute = document.getElementById('song');
	mute.muted = true;

};
JukeBox.prototype.UnmuteSong = function() {
	var unmute = document.getElementById('song');
	unmute.muted = false;
};
JukeBox.prototype.Reset = function() {
	var song = document.getElementById('song')
	song.currentTime = 0;	
};
JukeBox.prototype.PlayRewind = function() {
	var backward = document.getElementById('song')
	document.getElementById('turntable').style.backgroundImage = 'url(SongPlaying.gif)';
	backward.currentTime -=5.0;
};
JukeBox.prototype.PlayFastFoward = function() {
	var forward = document.getElementById('song')
	document.getElementById('turntable').style.backgroundImage = 'url(SongPlaying.gif)';
	forward.currentTime +=5.0;		
};
JukeBox.prototype.PlayButton = function() {
	var song = document.getElementById('song');
	document.getElementById('turntable').style.backgroundImage = 'url(SongPlaying.gif)';
	song.play();
};

var playSong = new JukeBox();
var pauseSong = new JukeBox();
var muteSong = new JukeBox();
var unmuteSong = new JukeBox();
var resetSong = new JukeBox();
var playRewind = new JukeBox();
var playFastFoward = new JukeBox();
var playButton = new JukeBox();

// var currentTime, durationTime;

// currentTime = document.getElementById('currentTime');

// currentTime.ontimeupdate = function() {myFunction()};

// function myFunction() {
    
//     document.getElementById("currentTime").innerHTML = aud.currentTime;

// }
