import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'

function diarypage() {
  const [name,setName] = useState('The Best Friend')
  const [editing,setEditing] = useState(false)
  const [revertName, setRevertName] = useState('')

  const save_name = () => {
    setEditing(false)
  }

  const cancle_name = () => {
    setEditing(false)
  }

  const true_editing = () => {
    setEditing(true)
  }

  return (
    <div>
    {!editing && <div className='relative min-h-screen bg-gradient-to-br from-[pink] to-[#aad5f8] overflow-hidden flex justify-center items-start px-[5rem] pt-[1rem] pb-[5rem]'>
      <div className='flex flex-col justify-center items-center'>
      <h1 className='text-[4rem] text-[#8787fb] text-center'>{name}</h1>
      <div className='flex gap-10 flex-wrap justify-center items-centre'><div className='w-[12rem] h-[12rem] p-[1rem] bg-[white] rounded-[30px] flex flex-col justify-center items-center'><p className='text-center'>Password Protection</p>
      <img src={'/passwordProtection.jpg'} className='w-[12rem]'/></div>
      <button onClick={true_editing}><div  className='w-[12rem] h-[12rem] p-[1rem] bg-[white] rounded-[30px] flex flex-col justify-center items-center'><p>Diary Name</p>
      <img src={'/animated-diary1.png'} className='w-[8rem]'/></div></button>
      <div  className='w-[12rem] h-[12rem] p-[1rem] bg-[white] rounded-[30px] flex flex-col justify-center items-center'><p>Diary Theme</p>
      <img src={'/diaryTheme.png'} className='w-[8rem] rounded-full'/></div>
      <div  className='w-[12rem] h-[12rem] p-[1rem] bg-[white] rounded-[30px] flex flex-col justify-center items-center'><p>Feedback</p>
      <img src={'/feedback.jpg'} className='w-[10rem] h-[8rem] rounded-full'/></div></div>
      <div><button disabled className='w-[12rem] h-[4rem] p-[1rem] rounded-[10px] flex justify-center items-center gap-4 mt-[2rem] bg-[#ecb6fc] text-white text-[1.2rem] border-5 border-white opacity-80 hover:opacity-100 hover:border-0 transition-all duration-200 hover:scale-105 cursor-pointer'><img src={'/newpage.png'} className='w-[2rem]'/>New Entry</button></div>
      </div>
    </div>}
    {editing && <div className='w-screen h-screen flex justify-center items-center bg-[#6b6a6a] blur-[1px]'>
      <div className='w-fit h-fit bg-[#f0bfbf]'><input type='text' value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={save_name}>Save</button>
      <button onClick={cancle_name}>Cancle</button>
      </div>
    </div>}
    </div>
  )
}

export default diarypage
