const recodrContainer = document.getElementById("jsRecordContainer");
const videoPreview = document.getElementById("jsVideoPreview");
const recordBtn = document.getElementById("jsRecordBtn");

let streamObject;
let videoRecorder;

const handleVideoData = event => {
  const { data: videoFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};

const stopRecording = () => {
  videoRecorder.stop();
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", getVideo);
  recordBtn.innerText = "Start Recording";
};

const startRecording = () => {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  console.log(videoRecorder);
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordBtn.addEventListener("click", stopRecording);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true
      //   video: true
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    streamObject = stream;
    recordBtn.innerText = "Stop Recording";
    startRecording();
  } catch (error) {
    recordBtn.innerText = "Can't Record 💔";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};

const init = () => {
  recordBtn.addEventListener("click", getVideo);
};

if (recodrContainer) {
  init();
}
