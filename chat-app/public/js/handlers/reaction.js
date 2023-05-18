let messageElement;
let messageText;
let menu;
let messageReactions;
let replyObject;
window.ondblclick = (e) =>{
    if(e.target.classList.contains('message')){
        messageElement = e.target.firstChild
        messageText = e.target.querySelector('.message_text').innerText
        messageReactions = e.target.querySelector('#message_reactions')
        menu = e.target.querySelector('.messageMenu')
        menu.style.display = 'inline';
        loadReactoionMenuTemplate(menu)
    }
}
const imojisArr = {like:'👍',dislike:'👎',love:'❤️',laugh:'🤣',angry:'😠',smile:'😊',kiss:'😘'}
document.onclick = (e) =>{
    if(menu && !menu.contains(e.target)){
        menu.style.display = 'none';
    }
    // console.log(e.target.id);
    if(e.target.id === 'copy'){
        navigator.clipboard.writeText(messageText)
        menu.style.display = 'none';
    }
    if(e.target.id === 'reply'){
        const fromPrevMsg = messageText.substring(0, 30)
        const replyUsername = messageElement.querySelector('.message_username').id
        replyObject =  {id:messageElement.id, replyUsername,fromPrevMsg}
        replyHandler({id:messageElement.id, replyUsername,fromPrevMsg})
        menu.style.display = 'none';
        // sendMessageHandler({to:{id:messageElement.id, replyUsername, fromPrevMsg}})
    }
    if(imojisArr[e.target.id]){
        sendReactionHandler({id:messageElement.id ,reactions:{reaction:imojisArr[e.target.id], number: 1}})
        menu.style.display = 'none';
    }
}
let reactionsHtml = ''
for (const imoji in imojisArr) {
    reactionsHtml += `<span class='reaction' id=${imoji}>${imojisArr[imoji]}</span>`
}
const loadReactoionMenuTemplate = (el) =>{
    el.innerHTML= `
    <div class='reactions'>
        ${reactionsHtml}
    </div>
    <div class='options'>
        <span id='copy'>Copy</span>
        <span id='reply'>Reply</span>
    </div>
    `
}

