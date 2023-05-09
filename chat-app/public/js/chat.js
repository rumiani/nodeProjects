const socket = io()
const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})
const messages = document.getElementById('messages')
const shareLocation = document.getElementById('location_icon')
const sendBtn = document.getElementById('sendBtn')
const input = document.getElementById('inputmessage')

input.addEventListener('input', function() {
    const newText = this.innerText;
    if(newText !== '')
        sendBtn.removeAttribute('disabled')
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendBtn.click();
  });
sendBtn.onclick = () => {
    sendBtn.setAttribute('disabled', 'disabled')
    
    if(input.innerText === '') return alert('Input is empty')
    if(input.innerText.length > 1000) return alert('Large input')
    socket.emit('sendMessage', input.innerText, (message) =>{
    });
    input.innerText = '';
    input.focus()
};


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

const appendMsg = (username,message,createdAt) =>{
    const li = document.createElement('li');
    li.innerHTML = `<h2 class='message_username'>
                        ${username}
                    </h2>
                    <div class='message_text'>
                        ${message}
                    </p>
                    <div class='message_info'>
                        <span class='message_time'>
                            ${moment(createdAt).format('hh:mm a')}
                        </span>
                        <span class='message_status'>
                            \&#10004;
                        </span>
                    </div>`
    
    messages.appendChild(li);
    messages.scrollTop = messages.scrollHeight;
}

let show = false
const users = document.getElementById('users')
const show_hide_users = document.getElementById('show_hide_users')

show_hide_users.onclick = () => {
    show_hide_users.src = show?'./images/users.png' : './images/close.png'
    show_hide_users.title = show?'Show users' : 'Close list'
    users.style.display = show?'none':'inline'
    show = !show
}