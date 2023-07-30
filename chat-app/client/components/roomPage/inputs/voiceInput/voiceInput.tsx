import React from 'react'
import { Timer } from './timer/timer'
import SendVoice from './btns/sendVoice/SendVoice'
import Cancel from './btns/cancel/Cancel'
import { useSelector } from 'react-redux'

const VoiceInput = () => {
  const{recording, inputText} = useSelector(state => state.appState)

//   const stopBtn = document.getElementById('stopBtn')
// const recordBtn = document.getElementById('recordBtn')
// const removeVoice = document.getElementById('removeVoice')
// const voiceLength = document.getElementById('voiceLength')

// let mediaRecorder;
// let audioChunks = [];
        
// const startRecording = () => {
//     navigator.mediaDevices.getUserMedia({ audio: true })
//     .then((stream) => {
//         audioChunks = [];

//         mediaRecorder = new MediaRecorder(stream);
        
//         mediaRecorder.addEventListener('dataavailable', (e) => {
//             audioChunks.push(e.data);
//         });
//         mediaRecorder.start();
//     })
//     .catch((err) => {
//         console.log('Error accessing microphone: ' + err);
//     });
// }

// function stopRecording(status) {
//     if (!mediaRecorder) return;
//     mediaRecorder.stop();
//     mediaRecorder.addEventListener('stop', function() {
//         let audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
//         let reader = new FileReader();
        
//         reader.onload = (event) => {
//             let audioData = event.target.result;
//             // Send the audio data to the server
//             if(status === 'send'){
//                 sendMessageHandler({audioData})
//             }
//         };
//         reader.readAsDataURL(audioBlob);
//         audioChunks = [];

//         const tracks = mediaRecorder.stream.getTracks();
//         tracks.forEach(track=>{
//         track.stop()
//         })
//     });
// }

// recordBtn.addEventListener('click',() =>{
//     inputBtnsHandler('record')
//     startRecording()
//     startTimer()
// });
// stopBtn.addEventListener('click', ()=>{
//     inputBtnsHandler()
//     stopRecording('send')
//     stopTimer()
// });
// removeVoice.onclick = () =>{
//     inputBtnsHandler()
//     stopTimer()
//     stopRecording('cancel')
// }


  return (
    <div id="voice_inputs"
  className={`${recording?'w-full':'w-fit'} bg-white flex flex-row justify-end p-1`}>
      {recording &&
          <div className='w-full flex flex-row'>
              <Timer/>
              <Cancel/>
              <SendVoice/>
          </div>
      }
    </div>
  )
}

export default VoiceInput