const replyInput = document.getElementById('reply_input')
const closeReplyIcon = document.getElementById('close_reply_icon')
const replyHandler = (id, username, replyText) =>{
    replyInput.style.display = 'block'
    const replyElement = `
    <span id='reply_icon'>&#10150;</span>
    <span id='reply_username'>${username}</span>
    <span id='reply_input_text'>${replyText}...</span>
    <span id='close_reply_icon'>&#215;</span>
    `
    replyInput.innerHTML = replyElement

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