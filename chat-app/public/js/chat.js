const socket = io()
// socket.on('CountUpdated', (count) =>{
//     console.log('Count has been updated to:', count);
// })
// // document.querySelector('button').onclick = () =>{
// //     socket.emit('increment')
// // }
// socket.on('message', (msg) => {
//     console.log(msg );
// })
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = e.target.elements.inputmessage
    if (input.value.trim() === '' ) return alert('Input is empty')
    input.value = '';
    socket.emit('sendMessage', input.value, () =>{
        console.log('message was delivered to the server');
    });
});
const messages = document.getElementById('messages')
socket.on('message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})



document.getElementById('location').onclick  = () =>{
    navigator.geolocation.getCurrentPosition(position =>{
        socket.emit('sendLocation', {latitude: position.coords.latitude, longitude: position.coords.longitude});
    })
}
socket.on('location', (link) => {
    const item = document.createElement('li');
    item.textContent = link
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})