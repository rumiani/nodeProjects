const users = document.getElementById('sidebar')
const show_users_icon = document.querySelector('.show_users_icon')
const hide_users_icon = document.querySelector('.hide_users_icon')

window.onclick = (e) => {
    if(e.target === show_users_icon){
        hide_users_icon.style.display = 'inline'
        users.style.display = 'inline'
        show_users_icon.style.display = 'none'
    }
    else if (window.innerWidth <= 600 && !users.contains(e.target) && hide_users_icon){
        show_users_icon.style.display = 'inline'
        hide_users_icon.style.display = 'none'
        users.style.display = 'none'
    }
}


const roomName = document.getElementById('room')
const usersList = document.getElementById('users_list')

socket.on('roomData', roomData =>{
    roomName.textContent = roomData.room
    let lis = ``
    roomData.users.forEach(user => {
        if(user.username === username)
            lis += `<li><h2>${user.username}</h2></li>`
        else
            lis += `<li>${user.username}</li>`
    })
    usersList.innerHTML = lis
})