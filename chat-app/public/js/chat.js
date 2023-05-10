const socket = io()
const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})
const messages = document.getElementById('messages')
const shareLocation = document.getElementById('location_icon')
const send_btn = document.getElementById('send_btn')
const input = document.getElementById('message_input')
const chat_nav = document.getElementById('chat_nav')

input.addEventListener('input', function() {
    input.classList.add('input_bg')
    chat_nav.style.background = 'green'

    const newText = this.innerText;
    const width = newText.length /10
    if(width < 100){
        chat_nav.style.width = `${width}%`
    }
    if(width > 90){
        chat_nav.style.background = 'red'
    }
    if(width >=100){
        chat_nav.style.width = '100%'
    }
    if(newText.length > 0 ){
        input.classList.remove('input_bg')
        send_btn.removeAttribute('disabled')
    }
    if(newText.length > 1000){
        send_btn.setAttribute('disabled', 'disabled')
    }
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') send_btn.click();
  });

send_btn.onclick = () => {
    input.classList.add('input_bg')
    send_btn.setAttribute('disabled', 'disabled')
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
document.onclick = (e) => {
    if (e.target !== show_hide_users && e.target !== users){
        show_hide_users.src = './images/users.png'
        show_hide_users.title = 'Show users'
        users.style.display = 'none'
        show = false
    }
}