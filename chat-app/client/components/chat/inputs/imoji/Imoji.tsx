import React, { useEffect, useRef, useState } from 'react'
import List from './list/List'
import Search from './search/Search'

const Imoji = () => {
    const[showImoji, setShowImoji] = useState(false)
    const[imojiArray, setImojiArray] = useState([])
    const imojiBox = useRef()

    useEffect(() =>{
        fetch('/assets/imojis/imojis.json')
        .then((response) => response.json())
        .then((obj) => {
            const array = Object.entries(obj).map(([key, value]) => ({ key, value }))
            setImojiArray(array)}
        )
        .catch(err => console.log(err));

        onclick = clickOutsideHandler
    },[showImoji])
    
const clickOutsideHandler  = (e) =>{ 
    if (imojiBox.current && !imojiBox.current.contains(e.target)) {
        setShowImoji(false)
    }
}
//     const imojiBtn = document.getElementById('imoji_btn')
// const imojiBox = document.getElementById('imoji_box')
// const inputImoji = document.getElementById('input_imoji')
// const searchResult= document.getElementById('search_result')

// addEventListener('click', (e) => {
//     if(e.target.className === 'eachImoji'){
//         addImojiToInput(e.target.id)
//         inputController()
//     }
//     // if(e.target === imojiBtn){
//     //     imojiBox.style.display = 'inline'
//     // }
//     else if ( !imojiBox.contains(e.target)){
//         imojiBox.style.display = 'none'
//     }
//     else if ( !imojiBox.contains(e.target)){
//         imojiBox.style.display = 'none'
//     }
// })
// let imojiArray;



// const addImojiToInput = (id) =>{
//     const messageInput = document.getElementById('message_input')
//     messageInput.innerText = messageInput.innerText + imojiArray[id]
// }








  return (
    <div ref={imojiBox}>
        <button id="imoji_btn" onClick={() => setShowImoji(!showImoji)}
        className='w-8 h-8 font-bold text-3xl text-center'>&#x263A;</button>
        {showImoji?
            <div  className=' absolute bg-white bottom-12 left-8 w-60 h-60 rounded-lg shadow-gray-300 shadow-lg p-1 overflow-hidden'>
                <Search imojiArray={imojiArray}/>
                <List imojiArray={imojiArray} />
            </div>
        :null}
    </div>
  )
}
/**
#imoji_search{
    width: 100%;
    min-height:20px ;
    border-bottom: 1px solid gray;
    margin: 0.5rem 0;
    padding-bottom: 0.5rem;
    overflow-y: auto;
}
#input_imoji { 
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
export default Imoji