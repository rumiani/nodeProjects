// document.addEventListener('DOMContentLoaded', function() {
//     const reactionElement = document.querySelectorAll('.reaction')
//     const copyMsg = document.querySelector('#copy')
//     const replyMsg = document.querySelectorAll('#reply')
// })
let messageElement;
let messageText;
let menu;
let messageReactions;
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
        console.log('reply',fromPrevMsg);
        menu.style.display = 'none';
    }
    if(imojisArr[e.target.id]){
        sendReactionHandler(messageElement.id, imojisArr[e.target.id])
        menu.style.display = 'none';
    }
}
let reactions = ''
for (const imoji in imojisArr) {
    reactions += `<span class='reaction' id=${imoji}>${imojisArr[imoji]}</span>`
}
// console.log(reactions);
const reactionTemplate = `
<div class='reactions'>
    ${reactions}
</div>
<div class='options'>
    <span id='copy'>Copy</span>
    <span id='reply'>Reply</span>
</div>
`
const loadReactoionMenuTemplate = (el) =>{
    el.innerHTML= reactionTemplate
}

