import React from 'react'
interface objType {
    imojiArray:[] | null
}
const List = ({imojiArray}:objType) => {
    
  return (
    <div id="imoji_list" className='h-96 overflow-auto'>
        <ul id="search_result" className=' w-full flex flex-wrap justify-around'>
            {imojiArray && imojiArray.map((imoji,index) => {                                            
                return(
                    <li key={index+imoji.value} title={imoji.key} 
                        className=' flex justify-center align-middle cursor-pointer w-8 h-8 m-1 shadow-gray-400  hover:scale-150 transition-all duration-300 rounded-full'>
                        {imoji.value}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default List