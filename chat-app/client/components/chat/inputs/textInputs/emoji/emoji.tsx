import React, { useEffect, useRef, useState } from 'react'
import List from './list/List'
import Search from './search/Search'

const Emoji = () => {
    const[showEmoji, setShowEmoji] = useState(false)
    const[emojiArray, setEmojiArray] = useState([])
    const emojiBox = useRef()

    useEffect(() =>{
        fetch('/assets/emojis/emojis.json')
        .then((response) => response.json())
        .then((obj) => {
            const array = Object.entries(obj).map(([key, value]) => ({ key, value }))
            setEmojiArray(array)}
        )
        .catch(err => console.log(err));

        onclick = clickOutsideHandler
    },[showEmoji])
    
const clickOutsideHandler  = (e) =>{ 
    if (emojiBox.current && !emojiBox.current.contains(e.target)) {        
        setShowEmoji(false)
    }
}
//     const emojiBtn = document.getElementById('emoji_btn')
// const emojiBox = document.getElementById('emoji_box')
// const inputEmoji = document.getElementById('input_emoji')
// const searchResult= document.getElementById('search_result')

// addEventListener('click', (e) => {
//     if(e.target.className === 'eachEmoji'){
//         addEmojiToInput(e.target.id)
//         inputController()
//     }
//     // if(e.target === EmojiBtn){
//     //     emojiBox.style.display = 'inline'
//     // }
//     else if ( !emojiBox.contains(e.target)){
//         emojiBox.style.display = 'none'
//     }
//     else if ( !emojiBox.contains(e.target)){
//         emojiBox.style.display = 'none'
//     }
// })
// let emojiArray;



// const addEmojiToInput = (id) =>{
//     const messageInput = document.getElementById('message_input')
//     messageInput.innerText = messageInput.innerText + emojiArray[id]
// }








  return (
    <div ref={emojiBox}>
        <button id="emoji_btn" onClick={() => setShowEmoji(!showEmoji)}
            className='w-10 h-10 flex justify-center align-middle font-bold text-3xl text-center'>&#x263A;</button>
        {showEmoji?
            <div  className=' absolute bg-white bottom-12 left-8 w-60 h-60 rounded-lg shadow-gray-300 shadow-lg p-1 overflow-hidden'>
                <Search emojiArray={emojiArray}/>
                <List emojiArray={emojiArray} />
            </div>
        :null}
    </div>
  )
}
/**
#emoji_search{
    width: 100%;
    min-height:20px ;
    border-bottom: 1px solid gray;
    margin: 0.5rem 0;
    padding-bottom: 0.5rem;
    overflow-y: auto;
}
#input_Emoji { 
    border: none; 
    padding: 1rem;
    flex-grow: 1; 
    border-radius: 0.5rem;
    margin: 0 auto; 
    height: 20px;
    width: 100%;
    font-size: 14px;
    overflow-y: scroll;
    background-color: white;
    outline: none;
    transition:box-shadow 0.3s;
    box-shadow: 2px 2px 8px rgba(129, 118, 118, 0.162);
}
#search_result{
    width: 250px;
    overflow-y: auto;
}
 */
export default Emoji