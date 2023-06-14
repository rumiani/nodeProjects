import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io()
const users = document.getElementById('sidebar')
const show_users_icon = document.querySelector('.show_users_icon')
const hide_users_icon = document.querySelector('.hide_users_icon')
window.addEventListener('click', (e)=>{
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
})


const roomName = document.getElementById('room')
const usersList = document.getElementById('users_list')

socket.on('roomData', roomData =>{
    roomName.textContent = roomData.room
    let lis = ``
    roomData.users.forEach(user => {
        let liClass = user.username === username?'selfInfo':'userInfo'
        lis += ` <li class=${liClass}>
                    <img class='avatar' src=${user.src} />
                    <span>${user.username}</span>
                </li>`
    })
    usersList.innerHTML = lis
})
let avatarViewer = null;
addEventListener('click', (e) =>{
    const classlist = e.target.classList
    if(classlist.contains('chat_avatar') || classlist.contains('avatar')){
        avatarViewer = document.getElementById('avatar_viewer')
        avatarViewer.style.display = 'block'
        avatarViewer.innerHTML = `<img src=${e.target.src} alt=avatar>`
    }else if(avatarViewer){
        avatarViewer.style.display = 'none'
    }
})