const replyInput = document.getElementById('reply_input')
const closeReplyIcon = document.getElementById('close_reply_icon')
const replyHandler = ({id, replyUsername,fromPrevMsg}) =>{
    replyInput.style.display = 'block'
    const replyElement = `
    <span id=${id}></span>
    <span id='reply_icon'>&#10150;</span>
    <span id='reply_username'>${replyUsername}</span>
    <span id='reply_input_text'>${fromPrevMsg}...</span>
    <span id='close_reply_icon'>&#215;</span>
    `
    replyInput.innerHTML = replyElement
    document.getElementById('message_input').focus()
}
window.onclick = (e) =>{
    if(e.target.id === 'close_reply_icon'){
        closeInputReplyHandler()
    }
}
const closeInputReplyHandler = () =>{
    if(replyInput){
        replyInput.innerHTML = ''
        replyInput.style.display = 'none'
    }
}