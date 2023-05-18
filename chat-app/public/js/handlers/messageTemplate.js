const appendMsg = (message) =>{
    console.log('msgTemplate: ', message);
    const messages = document.getElementById('messages')
    const li = document.createElement('li');
    let usernameID;
    if(message.src === null) selfAvatar = '../assets/icons/avatar.png'

    let owner = 'user';
    usernameID = message.username
    if(message.username === 'admin') {
        owner ='admin'
        message.username = ''
        message.src = '../assets/icons/botAvatar.png'
    };
    if(message.username === username) {
        owner ='self';
        
        message.username = ''
    }
    
    li.innerHTML = `<div class="${owner}" data-timestamp=${message.createdAt} id=${message.id}>
                        <div class='messageMenu'></div>
                        <img src=${message.src} class='chat_avatar' />
                        <div>
                            <h2 class='message_username' id=${usernameID}>
                                ${message.username}
                            </h2>
                            <p class='fromPrevMsg' for=${message.to.id}>
                                ${message.to.fromPrevMsg}
                            </p>
                            <p class='message_text'>
                                ${message.text}
                            </p>
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
    messages.scrollTop = messages.scrollHeight;
}