const socket = io()
const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})
const messages = document.getElementById('messages')
const shareLocation = document.getElementById('location_icon')
const send_btn = document.getElementById('send_btn')
const input = document.getElementById('message_input')
const chat_bar = document.getElementById('chat_bar')
const src = localStorage.getItem('imgKey')

input.addEventListener('input', function(e) {
    inputController(e.target.innerText)
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        sendMessageHandler()
    }
});

send_btn.onclick = () => sendMessageHandler()

const sendMessageHandler = ()=>{
    if(input.innerText === '') return alert('Input is empty')
    if(input.innerText.length > limit) return alert('Large input')
    const base64img = localStorage.getItem('imgKey')
    socket.emit('sendMessage', {text: input.innerText, src: base64img}, (message) =>{
    });
    chat_bar.style.width = '0'
    input.innerText = '';
    input.classList.add('input_bg')
    input.focus()
    send_btn.setAttribute('disabled', 'disabled')
} 

socket.on('message', (message) => {
    appendMsg(message)
    // document.querySelectorAll(".message_status").lastElementChild.style.color = 'green'
})

shareLocation.onclick  = () =>{
    shareLocation.setAttribute('disabled', 'disabled')
    const base64img = localStorage.getItem('imgKey')
    navigator.geolocation.getCurrentPosition(position =>{
        socket.emit('sendLocation', {src:base64img,coords:{latitude: position.coords.latitude, longitude: position.coords.longitude}}, ()=>{
        shareLocation.removeAttribute('disabled')
    });
})
}

socket.on('location', (message) => {
    console.log('location message function',message);
    const link = `<a _blank href=${message.url}>My location</a>`
    appendMsg(message)
})

socket.emit('join', {username, room, src}, error => {
    if(error) {
        alert(error)
        location.href = '/'
    }
})


// reactions and options to message
// reply