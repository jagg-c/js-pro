import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]});


const playButton = document.querySelector(".playButton");
playButton.onclick = () => {
    player.togglePlay();
    updateControls();
}

const muteButton = document.querySelector(".muteButton");
muteButton.onclick = () => {
    player.toggleMute();
    updateControls();
}

function updateControls(){
    //Update playButton
    (player.media.paused)
        ? playButton.innerHTML = 'Play'
        : playButton.innerHTML = 'Pause';
    //Update muteButton
    (player.media.muted)
        ? muteButton.innerHTML = 'Unmute'
        : muteButton.innerHTML = 'Mute';
}


updateControls();