import React, { useEffect, useRef, useState } from 'react'
interface objType {
    imojiArray:[] | null
}
const Search = ({imojiArray}:objType) => {
    const[searchWord, setSearchWord] = useState('')
    const[searchResult,setsearchResult] = useState([])
    const searchInput = useRef()

    useEffect(() =>{
        searchInput.current?.focus()
    })
    const prepareSearchHandler = () =>{
        searchInput.current?.focus()
        setSearchWord('')
    }
    const changeHandler = (e) =>{
        const res = imojiArray?.filter( imoji => searchHandler(e.target.value, imoji.key))      
        setSearchWord(e.target.value.trim())
        setsearchResult(res)
    }
            
    const searchHandler = (word, string) => {
        let myPattern = new RegExp('(\\w*'+word+'\\w*)','gi');
        let matches = string.match(myPattern);
        if (matches === null) return false
        return true
    }
    return (
    <>
        <div id="imoji_search" className='relative  w-full max-h-40 p-1 mb-2 bg-gray-100 rounded-md border-gray border-b-1 overflow-auto'>
                    <input type="text" id="input_imoji" placeholder="Search imoji" autoComplete='off'
                        onChange={(e) => changeHandler(e)} value={searchWord} ref={searchInput}
                        className='w-full p-1 pr-10 rounded-md outline-none sticky top-0 bg-gray-50 focus:bg-white'/>
                    {searchWord === ''? null:
                        <button onClick={prepareSearchHandler} className='absolute right-2 top-2 rounded-lg bg-gray-300 w-6 h-6 text-center cursor-pointer hover:bg-gray-600 hover:text-gray-100 align-middle text-base'>
                        x
                        </button>}
                    {searchWord === ''? 
                        null:
                    searchResult.length > 0?
                        <ul id="search_result" className=' w-full flex flex-wrap justify-around overflow-auto'>
                        <span className='text-gray-500 px-2 text-sm cursor-default'> Search result:</span>

                            {searchResult.map((imoji,index) => {                            
                                return(
                                    <li key={index} title={imoji.key}
                                    className=' flex justify-center align-middle cursor-pointer w-8 h-8 m-1 shadow-gray-400  hover:scale-150 transition-all duration-300 rounded-full'>
                                        {imoji.value}
                                    </li>
                                )
                            })
                            }
                    </ul>:
                    <span className='text-gray-500 px-2 text-sm cursor-default'> No result!</span>
                    }
                </div>
    </>
  )
}

export default Search