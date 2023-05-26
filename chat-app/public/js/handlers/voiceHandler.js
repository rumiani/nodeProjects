const stopBtn = document.getElementById('stopBtn')
const recordBtn = document.getElementById('recordBtn')
const removeVoice = document.getElementById('removeVoice')

// Get access to microphone and start recording
const startRecording = () => {
    inputBtnsHandler('record')

    navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];
        
        mediaRecorder.addEventListener('dataavailable', (event) => {
            audioChunks.push(event.data);
        });
        
        mediaRecorder.addEventListener('stop', () => {
            const audioBlob = new Blob(audioChunks);
            const reader = new FileReader();
            
            reader.onload = () => {
                const base64Audio = reader.result.split(',')[1];
                console.log(base64Audio);
                socket.emit('voice_message', base64Audio);
            };
            
            reader.readAsDataURL(audioBlob);
        });
        
        // Start recording
        mediaRecorder.start();
        
        // Update UI
        document.getElementById('recordBtn').disabled = true;
        document.getElementById('stopBtn').disabled = false;
    })
    .catch((error) => {
        console.error('Error accessing microphone:', error);
    });
};

// Stop recording
const stopRecording = () => {
    // Stop media recording
    mediaRecorder.stop();
    
    // Update UI
    document.getElementById('recordBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
};

// Handle incoming voice messages
socket.on('voice_message', (data) => {
    // Create an audio element and play the received audio message
    const audio = new Audio();
    audio.src = `data:audio/ogg;base64,${data}`;
    audio.play();
    
    // Display the audio message in the chat
    const messageContainer = document.getElementById('messages');
    const message = document.createElement('div');
    message.textContent = 'Voice message received';
    messageContainer.appendChild(message);
});


recordBtn.addEventListener('click', startRecording);
stopBtn.addEventListener('click', stopRecording);