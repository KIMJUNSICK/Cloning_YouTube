const videoContainer = document.getElementById("jsVideoPlayer");
const playBtn = document.getElementById("jsPlayButton");

let videoPlayer;

const handlePlay = () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
};

const init = () => {
  videoPlayer = videoContainer.querySelector("video");
  playBtn.addEventListener("click", handlePlay);
};

if (videoContainer) {
  init();
}
