const socket = io()
const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})
const messages = document.getElementById('messages')
const shareLocation = document.getElementById('location_icon')
const send_btn = document.getElementById('send_btn')
const input = document.getElementById('message_input')
const chat_bar = document.getElementById('chat_bar')
const localObject = JSON.parse(localStorage.getItem('localData'))
let base64img = null
if(localObject) base64img = localObject.avatar.imageBase64

input.addEventListener('input', function(e) {
    inputController()
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        sendMessageHandler()
    }
});

send_btn.onclick = () => sendMessageHandler()

const sendMessageHandler = ({audioData ,reactions} = {})=>{
    const to = replyObject
    if(!audioData && input.innerText === '') return alert('Input is empty')
    if(!audioData && input.innerText.length > limit) return alert('Large input')
    const message = {
        text: input.innerText,
        audioData,
        src: base64img,
        reactions,
        to
    }
    socket.emit('sendMessage', message, (message) =>{
    });
    
    inputBtnsHandler('def')
    closeInputReplyHandler()
    inputController()

    replyObject = null
    document.getElementById('reply_input').innerHTML = ''
} 

socket.on('message', (message) => {
    appendMsg(message)
})

// shareLocation.onclick  = () =>{
//     shareLocation.setAttribute('disabled', 'disabled')
//     const base64img = localStorage.getItem('imgKey')
//     navigator.geolocation.getCurrentPosition(position =>{
//         socket.emit('sendLocation', {src:base64img,coords:{latitude: position.coords.latitude, longitude: position.coords.longitude}}, ()=>{
//         shareLocation.removeAttribute('disabled')
//     });
// })
// }

// socket.on('location', (message) => {
//     console.log('location message function',message);
//     const link = `<a _blank href=${message.url}>My location</a>`
//     appendMsg(message)
// })

socket.emit('join', {username, room, src:base64img, to: null, reactions: null}, error => {
    if(error) {
        alert(error)
        location.href = '/'
    }
})


const sendReactionHandler = ({id, reactions}) =>{
    socket.emit('sendReactions', {id, reactions}, (message) =>{
    });
}

socket.on('reactions', ({id, reactions}) => {
    const targetMessage = document.getElementById(id)
    const messageReactions = targetMessage.querySelector('#message_reactions')
    messageReactions.innerHTML = `<span id='message_reactions_place'>${reactions.reaction}</span>`
})