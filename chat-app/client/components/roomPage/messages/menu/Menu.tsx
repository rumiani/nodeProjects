import React from 'react'
const imojisArr = [{key: 'like', value:'👍'},{key: 'dislike', value:'👎'},{key: 'love', value:'❤️'},{key: 'laugh', value:'🤣'},{key: 'angry', value:'😠'},{key: 'smile', value:'😊'},{key: 'kiss', value:'😘'}]

const Menu = () => {
  return (
    <div className='rounded-lg w-24 bg-gray-300 -bottom-12 left-1/2 z-7 bg-opacity-80'>
        <ul className='reactions flex flex-row gap-3 overflow-y-auto scroll-m-6 p-2 w-40 relative -left-8 bg-gray-300 bg-opacity-90 rounded-lg'>
    {imojisArr.map( imoji => {
        return <li key={imoji.key} className='cursor-pointer hover:scale-150 transition-all duration-300'>{imoji.value}</li>
    }  )}
    </ul>
    <div id='copy' className='text-center p-1 cursor-pointer hover:bg-gray-600 hover:text-white'>Copy</div>
    <div id='reply' className='text-center p-1 cursor-pointer hover:bg-gray-600 hover:text-white rounded-b-lg'>Reply</div>
    </div>
  )
}
/*
.messageMenu{
    width:100px;
    border-radius: 0.25rem;
    background:rgba(128, 128, 128, 0.796);
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: -3rem;
    left: 50%;
    z-index: 7;
    display: none;
    -webkit-user-select: none; /* Safari */
    // -moz-user-select: none; 
    /* Firefox */
    // -ms-user-select: none; 
    /* Internet Explorer/Edge */
    // user-select: none;

export default Menu