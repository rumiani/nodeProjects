const socket = io()

const form = document.getElementById('form');
const messages = document.getElementById('messages')
const shareLocation = document.getElementById('location')
const submit = document.getElementById('submit')
form.addEventListener('submit', function(e) {
    submit.setAttribute('disabled', 'disabled')
    e.preventDefault();
    const input = e.target.elements.inputmessage
    if (input.value.trim() === '' ) {
        submit.removeAttribute('disabled')
        return alert('Input is empty')}
    socket.emit('sendMessage', input.value, () =>{
        console.log('message was delivered to the server');
    });
    submit.removeAttribute('disabled')
    input.value = '';
    input.focus()
});

socket.on('message', (msg) => {
    const item = document.createElement('li');
    item.textContent =moment(msg.createdAt).format('hh:mm a') + '- ' + msg.text;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})



shareLocation.onclick  = () =>{
    shareLocation.setAttribute('disabled', 'disabled')
    navigator.geolocation.getCurrentPosition(position =>{
        socket.emit('sendLocation', {latitude: position.coords.latitude, longitude: position.coords.longitude}, ()=>{
        shareLocation.removeAttribute('disabled')
            console.log('location shared.');
        });
    })
}
socket.on('location', (url) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = url.url
    link.textContent = moment(url.createdAt).format('hh:mm a') + '- ' +'Location link'
    li.appendChild(link)
    messages.appendChild(li);
    window.scrollTo(0, document.body.scrollHeight);
})
const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})

socket.emit('join', {username, room}, error => {
    if(error) {
        alert(error)
        location.href = '/'
    }
})