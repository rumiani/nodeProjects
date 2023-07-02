import Image from 'next/image'
import React, { useState } from 'react'
import { Timer } from './timer'

const VoiceInput = () => {
  const[recording, setRecording] = useState(false)
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
    className='w-full bg-white flex flex-row justify-end p-1'>
      {recording?
          <>
              <Timer/>
              <Image onClick={()=> setRecording(false)} width={24} height={24} id="removeVoice" src="/assets/icons/close.png" title="delete voice" alt="delete_voice" 
              className='mx-2 cursor-pointer'/>
              <Image onClick={()=> setRecording(false)} width={24} height={24} id="stopBtn"
              src="/assets/icons/send.png" title="stop voice" alt="stop_voice" 
              className='mx-2 cursor-pointer'/>
          </>:
          <Image onClick={()=> setRecording(true)} width={24} height={24}  
          id="recordBtn" src="/assets/icons/mic.png" alt="mic"
          className='w-8 h-8 cursor-pointer' />
      }
    </div>
  )
}

export default VoiceInput