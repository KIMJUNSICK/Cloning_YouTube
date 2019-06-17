const recodrContainer = document.getElementById("jsRecordContainer");
const videoRecorder = document.getElementById("jsVideoPreview");
const recordBtn = document.getElementById("jsRecordBtn");

const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true
      //   video: true
    });
    videoRecorder.srcObject = stream;
    videoRecorder.muted = true;
    videoRecorder.play();
  } catch (error) {
    recordBtn.innerText = "Can't Record 💔";
    recordBtn.removeEventListener("click", startRecording);
  }
};

const init = () => {
  recordBtn.addEventListener("click", startRecording);
};

if (recodrContainer) {
  init();
}
