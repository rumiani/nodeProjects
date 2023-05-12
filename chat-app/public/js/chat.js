const socket = io()
const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})
const messages = document.getElementById('messages')
const shareLocation = document.getElementById('location_icon')
const send_btn = document.getElementById('send_btn')
const input = document.getElementById('message_input')
const chat_bar = document.getElementById('chat_bar')

input.addEventListener('input', function(e) {
    inputController(e.target.innerText)
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // Prevent the browser to add a </br> inside the editable tag:
        e.preventDefault()
        sendMessageHandler()
    }
});

send_btn.onclick = () => sendMessageHandler()

const sendMessageHandler = ()=>{
    if(input.innerText === '') return alert('Input is empty')
    if(input.innerText.length > limit) return alert('Large input')
    
    socket.emit('sendMessage', input.innerText, (message) =>{
    });
    chat_bar.style.width = '0'
    input.innerText = '';
    input.classList.add('input_bg')
    input.focus()
    send_btn.setAttribute('disabled', 'disabled')
} 

socket.on('message', (message) => {
    appendMsg(message.username,message.text,message.createdAt)
    // document.querySelectorAll(".message_status").lastElementChild.style.color = 'green'
})

shareLocation.onclick  = () =>{
    shareLocation.setAttribute('disabled', 'disabled')
    navigator.geolocation.getCurrentPosition(position =>{
        socket.emit('sendLocation', {latitude: position.coords.latitude, longitude: position.coords.longitude}, ()=>{
        shareLocation.removeAttribute('disabled')
    });
})
}

socket.on('location', (message) => {
    const link = `<a _blank href=${message.url}>My location</a>`
    appendMsg(message.username, link, message.createdAt)
})

socket.emit('join', {username, room}, error => {
    if(error) {
        alert(error)
        location.href = '/'
    }
})


// length of name and room
// reactions and options to message
// reply
// avatar 
