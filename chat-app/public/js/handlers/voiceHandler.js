const stopBtn = document.getElementById('stopBtn')
const recordBtn = document.getElementById('recordBtn')
const removeVoice = document.getElementById('removeVoice')
const voiceLength = document.getElementById('voiceLength')

let mediaRecorder;
let audioChunks = [];
        
const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
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

function stopRecording() {
    if (!mediaRecorder) return;
    mediaRecorder.stop();

    mediaRecorder.addEventListener('stop', function() {
    let audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    let reader = new FileReader();
    
    reader.onload = (event) => {
        let audioData = event.target.result;
        // Send the audio data to the server
        sendMessageHandler(audioData)
        // socket.emit('voiceMessage', audioData, (message) =>{
        //     console.log('voice was sent');
        // });
    };
    reader.readAsDataURL(audioBlob);
    audioChunks = [];
    });
}

socket.on('voiceMessage', (audioData) => {
    var audio = new Audio();
    audio.src =audioData
    audio.controls = true;
    document.body.appendChild(audio);
});



recordBtn.addEventListener('click',() =>{
    inputBtnsHandler('record')
    startRecording()
    startTimer()
});
stopBtn.addEventListener('click', ()=>{
    inputBtnsHandler()
    stopRecording()
    stopTimer()
});
removeVoice.onclick = () =>{
    inputBtnsHandler()
    stopTimer()
    stopRecording()
}

let timerInterval; 
let second = 0;
let minute = 0;

const startTimer = () => {
  timerInterval = setInterval(updateTimer, 1000);
}

const updateTimer = () => {
    let preSec = ''
    let preMin = ''
    second++
    if(second % 60 === 0){
        minute++
        second -= 60
    }
    if (second < 10) preSec = '0'
    if (minute < 10) preMin = '0'
    voiceLength.innerText = preMin + minute + ':' + preSec + second
}

const stopTimer = () => {
    clearInterval(timerInterval); 
    second = 0;
    minute = 0;
    voiceLength.innerText = '00:00';
}

setTimeout(stopTimer, 300000);
