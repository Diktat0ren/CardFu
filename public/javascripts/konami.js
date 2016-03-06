
var song "";
switch(Math.floor((Math.random() * 3) + 1)) {
	case 1:
		song = "spacecats.mp3";
		break;
	case 2:
		song = "catsong2.mp3";
		break;
	case 3:
		song = "catsong3.mp3";
		break;
}
	
songPlaying = new Audio("../sound/+song);


songPlaying.volume = 0.5;
songPlaying.addEventListener("ended", function() {
	this.currentTime = 0;
	this.play();
}, false);

var playing = false;

//		   up  up down down left right left  right  b 	a  enter
var konami_keys = [38, 38, 40,  40,  37,  39,   37,   39,   66, 65, 13];
var konami_index = 0;

$(document).keydown(function(e){
	if(e.keyCode === konami_keys[konami_index++]){
		if(konami_index === konami_keys.length){
			konami_index = 0;
			if (playing) {
				songPlaying.pause();
				playing = false;
			} else {
				songPlaying.play();
				playing = true;
			}
		}
	}else{
		konami_index = 0;
	}
});
