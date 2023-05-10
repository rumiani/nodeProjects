const users = document.getElementById('sidebar')
const show_users_icon = document.querySelector('.show_users_icon')
const hide_users_icon = document.querySelector('.hide_users_icon')

document.onclick = (e) => {
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