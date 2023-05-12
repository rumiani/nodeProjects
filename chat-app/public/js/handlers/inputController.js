const limit = 200
const inputController = () =>{
    const send_btn = document.getElementById('send_btn')
    const input = document.getElementById('message_input')
    const chat_bar = document.getElementById('chat_bar')
    input.classList.add('input_bg')
    send_btn.setAttribute('disabled', 'disabled')
    chat_bar.style.background = 'green'
    const width = (input.innerText.length * 100) /limit
    if(width > 0 ){
        input.classList.remove('input_bg')
        send_btn.removeAttribute('disabled')
    }
    if(width <= 100){
        chat_bar.style.width = `${width}%`
    }
    if(width >= 90){
        chat_bar.style.background = 'yellow'
    }
    if(width > 100){
        chat_bar.style.background = 'red'
        chat_bar.style.width = '100%'
        send_btn.setAttribute('disabled', 'disabled')
    }
}