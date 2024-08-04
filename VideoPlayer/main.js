let play_pause_btn=document.getElementById("play-pause-btn")
let video=document.getElementById("video")
let volume_input=document.getElementById("volume-input")
let volume_mute_btn=document.getElementById("volume-mute-btn")
let video_ctime=document.getElementById("video-ctime")
let video_duration=document.getElementById("video-duration")
let progressbar=document.getElementById("progressbar")
let progressbar_input=document.getElementById("progressbar-input")
let playback_options_display_btn=document.getElementById("playback-options-display-btn")
let playback_options=document.getElementById("playback-options")
let plackback_option_btns=document.querySelectorAll(".plackback-option-btn");
let play_in_pip_btn=document.getElementById("play-in-pip-btn")
let fullscreen_btn=document.getElementById("fullscreen-btn")
let conntainer=document.getElementById("container")

play_pause_btn.onclick=()=>{
	video.paused?video.play():video.pause();
}

video.onplay=()=>{
	play_pause_btn.innerHTML=`<path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>`;
}

video.onpause=()=>{
	play_pause_btn.innerHTML=`<path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>`;
}

volume_input.oninput=()=>{
	video.volume=volume_input.value;
	if(volume_input.value==0){
		volume_mute_btn.innerHTML=`<path d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"></path>`;
	}else{
		if(!video.muted){
			volume_mute_btn.innerHTML=`<path d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff"></path>`;
		}
	}
}

volume_mute_btn.onclick=()=>{
	if(video.muted){
		video.muted=false;
		volume_mute_btn.innerHTML=`<path d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff"></path>`;
	}else{
		video.muted=true;
		volume_mute_btn.innerHTML=`<path d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"></path>`;
	}
}

const formatTime=time=>{
	let seconds=Math.floor(time % 60),
	minutes=Math.floor(time / 60) % 60,
	hours=Math.floor(time / 3600);

	seconds=seconds<10?`0${seconds}`:seconds;
	minutes=minutes<10?`0${minutes}`:minutes;
	hours=hours<10?`0${hours}`:hours;

	if(hours == 0){
		return `${minutes}:${seconds}`;
	}
	return `${hours}:${minutes}:${seconds}`;
}

video.onloadeddata=()=>{
	video_duration.innerText=formatTime(video.duration)
}

video.ontimeupdate=()=>{
	video_ctime.innerText=formatTime(video.currentTime)
	let progress=(video.currentTime/video.duration) * 100
	progressbar_input.value=progress;
	progressbar.style.width=`${progress}%`
}

progressbar_input.oninput=()=>{
	let ctime=(progressbar_input.value / 100) * video.duration;
	progressbar.style.width=`${progressbar_input.value}%`
	video.currentTime=ctime;
}

playback_options_display_btn.onclick=()=>{
	if(playback_options.style.display=="grid"){
		playback_options.style.display="none";
	}else{
		playback_options.style.display="grid";
	}
}

plackback_option_btns.forEach(e=>{
	e.onclick=()=>{
		video.playbackRate=e.dataset.speed;
		playback_options.style.display="none";
	}
})

play_in_pip_btn.onclick=()=>{
	video.requestPictureInPicture();
}

fullscreen_btn.onclick=()=>{
	if(document.fullscreen){
		document.exitFullscreen()
		fullscreen_btn.innerHTML=`
			<path d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
		    <path d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
		    <path d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
		    <path d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>`
	}else{
		conntainer.requestFullscreen()
		fullscreen_btn.innerHTML=`
			<path d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"></path>
		    <path d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"></path>
		    <path d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"></path>
		    <path d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"></path>`
	}
}