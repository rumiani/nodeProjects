const joinForm = document.getElementById('join_form')
const nameInput = document.getElementById('username')
const roomInput = document.getElementById('room')
const nameInputError = document.querySelector('.name_input_error')
const roomInputError = document.querySelector('.room_input_error')
const joinPreviewAvatar = document.getElementById("join_preview_avatar")

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
      saveImageToLocalStorage('imgKey', joinPreviewAvatar);
      console.log('save to local');
        return true
    }
}

const infoController = (value) =>{
    if(value.length < 3 || value.length > 20) return 'Input must be 3-20 characters'
    if(value.toLowerCase() === 'admin') return '"Admin" is not allowed as an input'
}

nameInput.addEventListener('input', () => hideErrorsHandler())
roomInput.addEventListener('input', () => hideErrorsHandler())
const hideErrorsHandler = () =>{
    nameInputError.style.display = 'none'
    roomInputError.style.display = 'none'
}


const uploadInput = document.getElementById("avatar_input_join");
const filenameSpan = document.getElementById("filename");

uploadInput.addEventListener("change", function() {
  if (uploadInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(e) {
      joinPreviewAvatar.src = e.target.result;
    };
    reader.readAsDataURL(uploadInput.files[0]);
    filenameSpan.textContent = uploadInput.files[0].name;
  } else {
    // joinPreviewAvatar.src = "../../assets/icons/avatar.png";
    filenameSpan.textContent = "Default";
  }
});

const saveImageToLocalStorage = (key, img) =>{
  const dataURL = base64Converter(img)
  localStorage.setItem(key, dataURL);
}



const base64Converter = (img) => {
  const c = document.createElement("canvas");
  c.width = img.width;
  c.height = img.height;
  const context = c.getContext("2d");
  context.drawImage(img, 0, 0, c.width, c.height);
  return c.toDataURL(); 
}
  
  
  