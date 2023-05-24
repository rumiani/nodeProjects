let repliedElementId;

const appendMsg = (message) =>{
    const messages = document.getElementById('messages_list')
    const li = document.createElement('li');
    let usernameID;
    let fromPrevMsg = '';
    if(message.to ){
        fromPrevMsg = `<a id='fromPrevMsg' href="#${message.to.id}">
                                ${message.to.fromPrevMsg}
                            </a>`
    }
    if(message.src === null) selfAvatar = '../assets/icons/avatar.png'

    let owner = 'user';
    usernameID = message.username
    if(message.username === 'admin') {
        owner ='admin'
        message.username = ''
        message.src = '../assets/icons/botAvatar.png';
        message.to = {}
        fromPrevMsg = ''
    };
    if(message.username === username) {
        owner ='self';
        
        message.username = ''
    }
    li.innerHTML = `
                    <div class='messageMenu'></div>
                    <div class="${owner}" data-timestamp=${message.createdAt} id=${message.id}>
                    <img src=${message.src} class='chat_avatar' />
                        <div>
                            <h2 class='message_username' id=${usernameID}>
                                ${message.username}
                            </h2>
                            ${fromPrevMsg}
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
    const container = document.getElementById('messages_container')
    container.scrollTop = container.scrollHeight;
}