const imojiBtn = document.getElementById('imoji_btn')
const imojiBox = document.getElementById('imoji_box')
const imojiList = document.getElementById('imoji_list')
const inputImoji = document.getElementById('input_imoji')
const searchResult= document.getElementById('search_result')
document.onclick = (e) => {
    if(e.target.className === 'eachImoji'){
        inputController()
        addImojiToInput(e.target.id)
    }
    if(e.target === imojiBtn){
        imojiBox.style.display = 'inline'
    }
    else if ( !imojiBox.contains(e.target)){
        imojiBox.style.display = 'none'
    }
    else if ( !imojiBox.contains(e.target)){
        imojiBox.style.display = 'none'
    }
}
let imojiObject;
fetch('../imojis/imojis.json')
    .then((response) => response.json())
    .then((json) => {
        let htmlResult = ''
        for(imoji in json){
            imojiObject = json
            htmlResult += `<span class='eachImoji' id=${imoji}>${imojiObject[imoji]}<span>`
        }
        imojiList.innerHTML = htmlResult
    });

const addImojiToInput = (id) =>{
    const messageInput = document.getElementById('message_input')
    messageInput.innerText = messageInput.innerText + imojiObject[id]
}

inputImoji.addEventListener('input', function (e) {
    let resHtml = ''
    for(imojiName in imojiObject){
        if(searchHandler(e.target.value, imojiName))
            resHtml += `<span class='eachImoji' id=${imojiName}>${imojiObject[imojiName]}<span>`
    }
    searchResult.innerHTML ='Result: '+ resHtml
})


const searchHandler = (word, string) => {
    let myPattern = new RegExp('(\\w*'+word+'\\w*)','gi');
    let matches = string.match(myPattern);
    if (matches === null) return false
    return true
}