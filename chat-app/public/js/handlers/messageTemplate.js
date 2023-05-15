const appendMsg = (message) =>{

    const messages = document.getElementById('messages')
    const li = document.createElement('li');
    if(message.src === null) selfAvatar = '../assets/icons/avatar.png'

    let owner = 'user';
    if(message.username === 'admin') {
        owner ='admin'
        message.username = ''
        message.src = '../assets/icons/botAvatar.png'
    };
    if(message.username === username) {
        owner ='self';
        message.username = ''
    }

    // let reaction = '❤️'    
    
    li.innerHTML = `<div class=${owner}>
                        <img src=${message.src} class='chat_avatar' />
                        <div>
                            <h2 class='message_username'>
                                ${message.username}
                            </h2>
                            <p class='message_text'>
                                ${message.text}
                            </p>
                            <div class='message_info'>
                                <span class='message_time'>
                                    ${moment(message.createdAt).format('hh:mm a')}
                                </span>
                                <span class='message_status'>
                                    \&#10004;
                                </span>
                            </div>
                        </div>
                    </div>`
    
    messages.appendChild(li);
    messages.scrollTop = messages.scrollHeight;
}