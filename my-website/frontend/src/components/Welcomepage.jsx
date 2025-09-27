import React from 'react'
import './Welcomepage.css'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'; 

function welcomepage({specialMember,setSpecialMember,secreteCode,setSecreteCode}) {
  return (
    <div>
      <div>
      <div>
      <div className='relative min-h-screen bg-gradient-to-br from-pink-200 to-purple-400 overflow-hidden'>
        <div className="absolute inset-0 float bg-[url('/bubbles.svg')] bg-repeat bg-[length:500px_500px] opacity-15 z-0"/>
        <div className='relative z-10 flex flex-col items-center justify-start text-center mt-[1rem] min-h-screen px-4'>
        <h1 className='text-6xl text-center'>Welcome to LumiSpace</h1>
        {specialMember && <p className='text-[1.5rem] text-[#ffff00]'>(😍Hurray! You are a Special Member🤩)</p>}
        <p className='mt-[1.5rem] text-[1.2rem] text-center opacity-50 position-animation'>A little place to feel seen</p>
        <Link to='/mainpage'><button className='w-fit h-fit py-[1rem] px-[2rem] font-extrabold text-[1.2rem] text-white rounded-[10px] bg-gradient-to-br from-[#f17d7d] to-[#f960e2] mt-[2rem] hover:scale-105 transition cursor-pointer'>Start Exploring</button></Link>
        <div className='flex justify-around gap-4 mt-[2.5rem] flex-wrap'>
          <div className='w-[10rem] h-[10rem] p-[1.5rem] bg-white rounded-[20px] hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl cursor-pointer'><img src='/cute-pink-brain.png' className='w-[5rem] m-auto image-shadow'/><p className='mt-[0.8rem]'>Quate of the day</p></div>
          <div className='w-[10rem] h-[10rem] p-[1.5rem] bg-white rounded-[20px] hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl cursor-pointer'><img src='/animated-headphone.jpg' className='w-[5rem] m-auto image-shadow'/><p className='mt-[0.8rem]'>Mood check</p></div>
          <div className='w-[10rem] h-[10rem] p-[1.5rem] bg-white rounded-[20px] hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl cursor-pointer'><img src='/animated-bulb.jpg' className='w-[5rem] m-auto image-shadow'/><p className='mt-[0.8rem]'>Kindness idea</p></div>
        </div>
        <div className='w-fit h-fit bg-[#fffdd8] rounded-[20px] py-[1rem] px-[2rem] mt-[2.5rem]'>
          <h2 className='text-[1.7rem] font-extrabold'>Today's Highlight🌟</h2>
          <p className='text-[1.1rem]'>You are doing better than you think.Keep going.💖</p>
        </div>
        {specialMember && <div className='flex flex-col w-fit h-fit py-[1rem] px-[2rem] rounded-[10px] bg-[#fed6d6] mt-[2rem]'>
          <h2 className='text-[1.5rem] font-extrabold'>💫✨Secret Spark💝💖</h2><p className='text-[0.8rem] text-[#ef5cff] mt-0 self-end'>(For the <b>Dear</b> one only)</p>
          <p className='text-[1.1rem]'>Here is something special just for you...</p></div>}
          <div>
          <p className='mt-[2rem]'>Made with 🩷 for anyone who needs a little light. <FaIcons.FaCopyright className='inline-block'/> 2025 LumiSpace</p>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default welcomepage
