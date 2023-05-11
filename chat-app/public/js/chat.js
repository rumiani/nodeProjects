// import Mark from 'Mark' 
const socket = io()
const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})
const messages = document.getElementById('messages')
const shareLocation = document.getElementById('location_icon')
const send_btn = document.getElementById('send_btn')
const input = document.getElementById('message_input')
const chat_bar = document.getElementById('chat_bar')

const limit = 100
input.addEventListener('input', function() {
    input.classList.add('input_bg')
    send_btn.setAttribute('disabled', 'disabled')

    chat_bar.style.background = 'green'

    const newText = this.innerText;
    const width = (newText.length * 100) /limit
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
        // var instance = new Mark(document.querySelector("span.message_input"));
        // instance.mark("text", {
        //     "element": "span",
        //     "className": "highlight"
        // });
        chat_bar.style.background = 'red'
        chat_bar.style.width = '100%'
        send_btn.setAttribute('disabled', 'disabled')
    }
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

const roomName = document.getElementById('room')
const usersList = document.getElementById('users_list')

socket.on('roomData', roomData =>{
    roomName.textContent = roomData.room
    let lis = ``
    roomData.users.forEach(user => {
        if(user.username === username)
            lis += `<li><h2>${user.username}</h2></li>`
        else
            lis += `<li>${user.username}</li>`
    })
    usersList.innerHTML = lis
})

const appendMsg = (messageUsername,messageText,createdAt) =>{
    const li = document.createElement('li');
    
    let messageOwner = 'user_message';
    if(messageUsername === 'Admin') messageOwner ='admin_message';
    if(messageUsername === username) {
        messageOwner ='self_message';
        messageUsername = ''
    }


    li.innerHTML = `<div class=${messageOwner}>
                        <h2 class='message_username'>
                            ${messageUsername}
                        </h2>
                        <p class='message_text'>
                            ${messageText}
                        </p>
                        <div class='message_info'>
                            <span class='message_time'>
                                ${moment(createdAt).format('hh:mm a')}
                            </span>
                            <span class='message_status'>
                                \&#10004;
                            </span>
                        </div>
                    </div>`
    
    messages.appendChild(li);
    messages.scrollTop = messages.scrollHeight;
}

// imoji
// reactions and options to message
// reply
// avatar 
