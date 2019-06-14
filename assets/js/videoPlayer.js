const videoContainer = document.getElementById("jsVideoPlayer");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeButton");
const ScreenBtn = document.getElementById("jsScreenButton");

let videoPlayer;

const handlePlay = () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
};

const handleVolume = () => {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
};

const goSmallScreen = () => {
  document.exitFullscreen();
  ScreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
  ScreenBtn.removeEventListener("click", goSmallScreen);
};

const goFullScreen = () => {
  videoContainer.requestFullscreen();
  ScreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
  ScreenBtn.removeEventListener("clcik", goFullScreen);
  ScreenBtn.addEventListener("click", goSmallScreen);
};

const init = () => {
  videoPlayer = videoContainer.querySelector("video");
  playBtn.addEventListener("click", handlePlay);
  volumeBtn.addEventListener("click", handleVolume);
  ScreenBtn.addEventListener("click", goFullScreen);
};

if (videoContainer) {
  init();
}
