const appendMsg = (message) =>{
    const messages = document.getElementById('messages_list')
    const li = document.createElement('li');
    // console.log(message);
    message = modifiedMsg(message)
    li.innerHTML = `
                    <div class='messageMenu'></div>
                    <div class="${message.owner}" data-timestamp=${message.createdAt} id=${message.id}>
                    <img src=${message.src} class='chat_avatar' />
                        <div>
                            <h2 class='message_username' id=${message.usernameID}>
                                ${message.username}
                            </h2>
                            ${message.fromPrevMsg}
                            ${message.messageContent}
                            <div class='message_info'>
                                <div id='message_reactions'>
                                </div>
                                <span class='message_time'>
                                    ${moment(message.createdAt).format('hh:mm a')}
                                </span>
                                <span class='message_status'>
                                    \&#10004;
                                </span>
                            </div>
                        </div>
                    </div>`
    li.classList.add('message')
    messages.appendChild(li);
    const container = document.getElementById('messages_container')
    container.scrollTop = container.scrollHeight;
}

const modifiedMsg = (message) => {
    hideLastMsgAvatarFromThisOwner(message.username)
    message.fromPrevMsg = '';
    message.owner = 'user';
    message.usernameID = message.username
    if(message.to ){
        fromPrevMsg = `<a id='fromPrevMsg' href="#${message.to.id}">
                            ${message.to.fromPrevMsg}
                      </a>`
    }
    if(message.src === null) {
        selfAvatar = '../assets/icons/avatar.png'
    }
    if(message.username === 'admin') {
        message.owner ='admin'
        message.username = ''
        message.src = '../assets/icons/botAvatar.png';
        message.to = {}
        message.fromPrevMsg = ''
    };
    if(message.username === username) {
        message.owner ='self';
        message.username = ''
    }
    if(message.text !== '' ){
        message.messageContent = `<p class='message_text'>
                                ${message.text}
                            </p>`
    }
    if(message.audioData !== undefined){
        message.messageContent = `<audio controls src=${message.audioData} type="audio/ogg" class='voice_message'/>`
    }
    // console.log('after: ',message);
    return message
}

const hideLastMsgAvatarFromThisOwner = (owner) =>{
    const messages = document.getElementsByClassName('message');
    const lastMsg = messages[messages.length - 1];
    if(lastMsg && lastMsg.querySelector('.message_username').id === owner){
        lastMsg.querySelector('.chat_avatar').style.display = 'none'
    }
}