import React from 'react'
interface objType {
    emojiArray:[] | null
}
const List = ({emojiArray}:objType) => {
    
  return (
    <div id="emoji_list" className='h-96 overflow-auto'>
        <ul id="search_result" className=' w-full flex flex-wrap justify-around'>
            {emojiArray && emojiArray.map((emoji,index) => {                                            
                return(
                    <li key={index + emoji.value} title={emoji.key} 
                        className=' flex justify-center align-middle cursor-pointer w-8 h-8 m-1 shadow-gray-400  hover:scale-150 transition-all duration-300 rounded-full'>
                        {emoji.value}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default List