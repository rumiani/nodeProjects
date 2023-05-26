const inputBtnsHandler = (status)=>{
    const recordBtn = document.getElementById('recordBtn')
    const stopBtn = document.getElementById('stopBtn')
    const removeVoice = document.getElementById('removeVoice')
    const sendBtn = document.getElementById('send_btn')
    const input = document.getElementById('message_input')
    const textInputs = document.getElementById('text_inputs')
    const voiceInputs = document.getElementById('voice_inputs')
    sendBtn.setAttribute('disabled', 'disabled')

    switch (status) {
        case 'record':
            textInputs.style.display = 'none'
            voiceInputs.style.display = 'inline'
        break;
        case 'type':
            textInputs.style.display = 'inline'
            stopBtn.style.display = 'none'
            removeVoice.style.display = 'none'
            recordBtn.style.display = 'none'
            sendBtn.style.display = 'inline'
            sendBtn.removeAttribute('disabled')
            input.classList.remove('input_bg')
            break;
        case 'longText':
            console.log('dis');
            stopBtn.style.display = 'none'
            removeVoice.style.display = 'none'
            recordBtn.style.display = 'none'
            sendBtn.setAttribute('disabled', 'disabled')
            // sendBtn.style.display = 'inline'
        break;
        default:
            input.innerText = '';
            input.classList.add('input_bg')
            input.focus()
            
            voiceInputs.style.display = 'none'
            textInputs.style.display = 'inline'
            sendBtn.style.display = 'none'
            recordBtn.style.display = 'inline'

            break;
    }
}
