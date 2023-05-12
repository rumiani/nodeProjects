const joinForm = document.getElementById('join_form')
const nameInput = document.getElementById('username')
const roomInput = document.getElementById('room')
const nameInputError = document.querySelector('.name_input_error')
const roomInputError = document.querySelector('.room_input_error')

joinForm.onsubmit = ()=>{

    if(infoController(nameInput.value)){
        nameInputError.style.display = 'inline'
        nameInputError.innerText = infoController(nameInput.value)
        return false
    }
    if(infoController(roomInput.value)){
        roomInputError.style.display = 'inline'
        roomInputError.innerText = infoController(roomInput.value)
        return false
    }
    else{
        return true
    }
}

const infoController = (value) =>{
    if(value.length < 3 || value.length > 20) return 'Input must be 3-20 characters'
    if(value.toLowerCase() === 'admin') return '"Admin" is not allowed as an input'
}

nameInput.addEventListener('input', (e) => hideErrorsHandler())
roomInput.addEventListener('input', (e) => hideErrorsHandler())
const hideErrorsHandler = () =>{
    nameInputError.style.display = 'none'
    roomInputError.style.display = 'none'
}