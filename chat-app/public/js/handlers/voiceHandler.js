const stopBtn = document.getElementById('stopBtn')
const recordBtn = document.getElementById('recordBtn')
const removeVoice = document.getElementById('removeVoice')
const voiceLength = document.getElementById('voiceLength')

let mediaRecorder;
let audioChunks = [];
        
const startRecording = () => {
    // console.log(navigator);
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
        audioChunks = [];

        mediaRecorder = new MediaRecorder(stream);
        
        mediaRecorder.addEventListener('dataavailable', (e) => {
            audioChunks.push(e.data);
        });
        mediaRecorder.start();
    })
    .catch((err) => {
        console.log('Error accessing microphone: ' + err);
    });
}

function stopRecording(status) {
    if (!mediaRecorder) return;
    mediaRecorder.stop();
    mediaRecorder.addEventListener('stop', function() {
        console.log('yes stop');
        let audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        let reader = new FileReader();
        
        reader.onload = (event) => {
            let audioData = event.target.result;
            // Send the audio data to the server
            if(status === 'send'){
                sendMessageHandler({audioData})
            }
        };
        reader.readAsDataURL(audioBlob);
        audioChunks = [];
        
        const tracks = mediaRecorder.stream.getTracks();
        tracks.forEach(track=>{
        track.stop()
        })
    });
}

recordBtn.addEventListener('click',() =>{
    inputBtnsHandler('record')
    startRecording()
    startTimer()
});
stopBtn.addEventListener('click', ()=>{
    inputBtnsHandler()
    stopRecording('send')
    stopTimer()
});
removeVoice.onclick = () =>{
    inputBtnsHandler()
    stopTimer()
    stopRecording('cancel')
}

let timerInterval; 
let second = 0;
let minute = 0;
let miliSec = 0
const startTimer = () => {
  timerInterval = setInterval(updateTimer, 100);
}

const updateTimer = () => {
    let preMiliSec = ''
    let preSec = ''
    let preMin = ''
    miliSec++
    if(miliSec % 10 === 0){
        second++
        miliSec -= 10
        if(second % 60 === 0){
            minute++
            second -= 60
        }
    }
    if (second < 10) preSec = '0'
    if (minute < 10) preMin = '0'
    if (miliSec < 10) preMiliSec = '0'

    voiceLength.innerText = preMin + minute + ':' + preSec + second + ',' + preMiliSec + miliSec
}

const stopTimer = () => {
    clearInterval(timerInterval); 
    second = 0;
    minute = 0;
    voiceLength.innerText = '00:00';
}

setTimeout(stopTimer, 300000);
