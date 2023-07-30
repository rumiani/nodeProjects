const limit = 200
const inputController = () =>{
    const input = document.getElementById('message_input')
    const chat_bar = document.getElementById('chat_bar')
    chat_bar.style.background = 'green'
    chat_bar.style.width = '0'

    const width = (input.innerText.length * 100) /limit
    if(width === 0){
        inputBtnsHandler()
    }
    if(width > 0 ){
        inputBtnsHandler('type')
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
        inputBtnsHandler('longText')
    }
}