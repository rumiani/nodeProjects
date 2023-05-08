let show = false
const users = document.getElementById('users')
const show_hide_users = document.getElementById('show_hide_users')

show_hide_users.onclick = () => {
    show_hide_users.src = show?'./images/users.png' : './images/close.png'
    show_hide_users.title = show?'Show users' : 'Close list'
    users.style.display = show?'none':'inline'
    show = !show
}