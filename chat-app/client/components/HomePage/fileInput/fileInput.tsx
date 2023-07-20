import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

function FileInput({src}) {
  const{user} = useSelector(state => state.appState)
  const[avatar,setAvatar] = useLocalStorage('avatar',null)
  const[previewAvatar, setPreviewAvatar] = useState(src?src:'/assets/icons/avatar.png')
  const[isLarge, setIsLarge] = useState(false)
  const loginAvatar = useRef()

  useEffect(() =>{
    if(avatar) setPreviewAvatar(avatar)
  },[avatar])

  const changeAvatarHandler = (e) => {
    console.log((Math.round(e.target.files[0].size)));
    setIsLarge(false)
    if((Math.round(e.target.files[0].size) > 2000000)) return setIsLarge(true)

    if (e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function(e) {
        const imageBase64 = e.target?.result;
          setPreviewAvatar(imageBase64);
          setAvatar(imageBase64)
          }
      }
  };

  return (
    <>
        <label className="cursor-pointer relative my-12 mx-0" htmlFor="avatar_input_join" >
          <Image ref={loginAvatar} src={previewAvatar} width={48} height={48} alt='avatar preview' id="join_preview_avatar"
          className='w-12 h-12 left-0 right-0 rounded-full border-none absolute my-0 mx-auto' />
        </label>
        {isLarge? <span className="text-red-500 py-0 px-2 my-2 mx-0 align-left text-xs">The image is too large.</span>:null}
        <input onChange={(e) => changeAvatarHandler(e)} id='avatar_input_join' className='hidden' type="file" accept="image/*" />
    </>
  )
}

export default FileInput