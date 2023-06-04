const joinForm = document.getElementById('join_form')
const nameInput = document.getElementById('username')
const roomInput = document.getElementById('room')
const nameInputError = document.querySelector('.name_input_error')
const roomInputError = document.querySelector('.room_input_error')
const joinPreviewAvatar = document.getElementById("join_preview_avatar")

joinForm.onsubmit = ()=>{
    if(infoController(nameInput.value)){
        nameInputError.style.visibility = 'visible';
        nameInputError.innerText = infoController(nameInput.value)
        return false
    }
    if(infoController(roomInput.value)){
        roomInputError.style.visibility = 'visible';
        roomInputError.innerText = infoController(roomInput.value)
        return false
    }
    else{
        return true
    }
}

const infoController = (value) =>{
    if(value.length < 3 || value.length > 25) return 'Input must be 3-20 characters'
    if(value.toLowerCase() === 'admin') return '"Admin" is not allowed as an input'
}

nameInput.addEventListener('input', () => hideErrorsHandler())
roomInput.addEventListener('input', () => hideErrorsHandler())
const hideErrorsHandler = () =>{
    nameInputError.style.visibility = 'hidden';
    roomInputError.style.visibility = 'hidden';
}

const uploadInput = document.getElementById("avatar_input_join");
const filenameSpan = document.getElementById("filename");

uploadInput.addEventListener("change", function() {
    let imgBase64;
    if (uploadInput.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(uploadInput.files[0]);
      reader.onload = function(e) {
        imgBase64 = e.target.result;
        localStorage.setItem('imgKey', imgBase64);
        filenameSpan.textContent = uploadInput.files[0].name;
        joinPreviewAvatar.src = imgBase64;
    }}
    else {
    filenameSpan.textContent = "Default";
    }
});