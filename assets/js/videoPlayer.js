const videoContainer = document.getElementById("jsVideoPlayer");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeButton");
const ScreenBtn = document.getElementById("jsScreenButton");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolumeBar");

let videoPlayer;

const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];
  fetch(`/api/${videoId}/view`, {
    method: "POST"
  });
};

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
    volumeRange.value = videoPlayer.volume;
    videoPlayer.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    volumeRange.value = 0;
    videoPlayer.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
};

const goSmallScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  ScreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
  ScreenBtn.removeEventListener("click", goSmallScreen);
};

const goFullScreen = () => {
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }
  ScreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
  ScreenBtn.removeEventListener("clcik", goFullScreen);
  ScreenBtn.addEventListener("click", goSmallScreen);
};

const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }

  return `${hours}:${minutes}:${totalSeconds}`;
};

const getCurrentTime = () => {
  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
};

const setTotalTime = () => {
  const totalTimeString = formatDate(videoPlayer.duration);
  totalTime.innerHTML = totalTimeString;
  setInterval(getCurrentTime, 1000);
};

const handleEnd = () => {
  registerView();
  videoPlayer.currentTime = 0;
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
};

const handleDrag = event => {
  const {
    target: { value }
  } = event;
  videoPlayer.volume = value;
  if (value >= 0.6) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else if (value >= 0.2) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else {
    volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
  }
};

const init = () => {
  videoPlayer = videoContainer.querySelector("video");
  videoPlayer.volume = 0.5;
  playBtn.addEventListener("click", handlePlay);
  volumeBtn.addEventListener("click", handleVolume);
  ScreenBtn.addEventListener("click", goFullScreen);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
  videoPlayer.addEventListener("ended", handleEnd);
  volumeRange.addEventListener("input", handleDrag);
};

if (videoContainer) {
  init();
}
