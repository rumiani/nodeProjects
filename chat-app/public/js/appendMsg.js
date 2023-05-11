const appendMsg = (messageUsername, messageText, createdAt) =>{
    const messages = document.getElementById('messages')

    const li = document.createElement('li');
    let messageOwner = 'user_message';
    if(messageUsername === 'Admin') messageOwner ='admin_message';
    if(messageUsername === username) {
        messageOwner ='self_message';
        messageUsername = ''
    }
    let avatar = './images/avatar.png'
    let reaction = '❤️'
    li.innerHTML = `<div class=${messageOwner}>
                        <div>
                            <img id='avatar' src=${avatar} alt='avatar'>
                            <p id='reaction'>${reaction}</p>
                        </div>
                        <div>
                            <h2 class='message_username'>
                                ${messageUsername}
                            </h2>
                            <p class='message_text'>
                                ${messageText}
                            </p>
                            <div class='message_info'>
                                <span class='message_time'>
                                    ${moment(createdAt).format('hh:mm a')}
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