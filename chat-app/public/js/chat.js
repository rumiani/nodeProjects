const socket = io()

const chat_form = document.getElementById('chat_form');
const messages = document.getElementById('messages')
const shareLocation = document.getElementById('location_icon')
const submit = document.getElementById('submit')

chat_form.addEventListener('submit', function(e) {
    submit.setAttribute('disabled', 'disabled')
    e.preventDefault();
    const input = e.target.elements.inputmessage
    socket.emit('sendMessage', input.value, () =>{
    });
    submit.removeAttribute('disabled')
    input.value = '';
    input.focus()
});

socket.on('message', (message) => {
    appendMsg(message)
    messages.scrollTop = messages.scrollHeight;
})

shareLocation.onclick  = () =>{
    shareLocation.setAttribute('disabled', 'disabled')
    navigator.geolocation.getCurrentPosition(position =>{
        socket.emit('sendLocation', {latitude: position.coords.latitude, longitude: position.coords.longitude}, ()=>{
        shareLocation.removeAttribute('disabled')
            // console.log('location shared.');
        });
    })
}
socket.on('location', (message) => {
    const li = document.createElement('li');
    const strong = document.createElement('strong');
    const a = document.createElement('a');
    const span = document.createElement('span');

    strong.innerText = message.username
    a.href = message.url
    a.textContent = 'Location link'
    a.target = '_blank'
    span.innerText = moment(message.createdAt).format('hh:mm a')

    li.appendChild(strong)
    li.appendChild(a)
    li.appendChild(span)
    
    messages.appendChild(li);

    
    messages.scrollTop = messages.scrollHeight;
})

const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})

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
            lis += `<li><strong>${user.username}</strong></li>`
        else
            lis += `<li>${user.username}</li>`
    })
    usersList.innerHTML = lis
})

const appendMsg = (message) =>{
    const li = document.createElement('li');
    const strong = document.createElement('strong');
    const p = document.createElement('p');
    const span = document.createElement('span');

    strong.innerText = message.username
    p.innerHTML = message.text
    span.innerText = moment(message.createdAt).format('hh:mm a')

    li.appendChild(strong)
    li.appendChild(p)
    li.appendChild(span)

    messages.appendChild(li);
}