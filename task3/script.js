const startButton = document.getElementById('startButton');
const joinButton = document.getElementById('joinButton');
const endButton = document.getElementById('endButton');
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

startButton.addEventListener('click', startVideo);
joinButton.addEventListener('click', joinVideo);
endButton.addEventListener('click', endVideo);

let localStream;
let remoteStream;

function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      localStream = stream;
      localVideo.srcObject = stream;
    })
    .catch(error => {
      console.log('Error accessing camera and microphone:', error);
    });
}

function joinVideo() {
}

function endVideo() {
  localStream.getTracks().forEach(track => track.stop());
  localVideo.srcObject = null;
  remoteVideo.srcObject = null;
}