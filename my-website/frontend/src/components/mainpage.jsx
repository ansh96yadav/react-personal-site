import React, { useContext } from 'react';
import { ImageProvider, ImageContext } from './profilecreator'; 
import './mainpage.css'
import { Link } from 'react-router-dom';

function MainPage({userName,setUserName,specialMember,setSpecialMember,secreteCode,setSecreteCode}) {
  const { image } = useContext(ImageContext); 

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-[pink] to-[#aad5f8] overflow-hidden flex justify-center items-center p-[5rem]'>
       <div className='flex flex-col justify-center items-center'> 
        {/* className='w-fit h-fit p-[2rem] rounded-[10px] bg-gradient-to-br from-[#a5f79c] to-[#e98bf0]' */}
        <p className='relative w-fit h-fit text-[3rem] text-[#ffffff] backdrop-blur-2xl blur-[2px] ouncing-animation px-4 py-2 rounded-2xl gradient-heading'>This is your archive of inspiration.</p>
        <p className='ml-[45%] mt-[0.4rem] text-[0.9rem] text-[#848484]'>A beautiful home for all your favourite things.</p>
        <img src={'animated-girl.png'} alt="User" className='w-40 h-40 rounded-full object-cover border-1 border-gray-400'/>
        {specialMember && <div><p className='text-center text-[#6b6b6b] text-[1.1rem] mt-[1rem] capitalize'>your cute name {userName}</p><p className='text-white text-[2rem] text-center capitalize mt-[-0.5rem] gradient-text'><img src={'/animated-crown.png'} className='w-[3rem] mt-[1rem] ml-[-1.1rem] mb-[-1.5rem] tiltCrown'/>Anna Parker</p></div>}
        {!specialMember && <p>{userName}</p>}
        
        <div className='flex gap-10 flex-wrap mt-[2rem] justify-center items-center'>
        <Link to='/diarypage'><div className='w-fit h-fit p-[1rem] rounded-[10px] blur-property'><h2 className='text-[1.4rem] text-[#3a47f3] text-center font-extrabold'>My Diary</h2>
        <img src={'/animated-diary.png'} className='w-[10rem] image-shadow'/></div></Link>
        <Link to='/memoriespage'><div className='w-fit h-fit p-[1rem] rounded-[10px] blur-property'><h2 className='text-[1.4rem] text-[#3a47f3] text-center font-extrabold'>My Memories</h2>
        <img src='./animated-frame.png' className='w-[10rem] image-shadow'/>
        </div></Link>
        <Link to='/detailpage'><div className='w-fit h-fit p-[1rem] rounded-[10px] blur-property'><h2 className='text-[1.4rem] text-[#3a47f3] text-center font-extrabold'>My Details</h2>
        <img src={'/girl-animated.jpg'} className='w-[10rem] image-shadow rounded-full'/></div></Link>
        <Link to='/favouritepage'><div className='w-fit h-fit p-[1rem] rounded-[10px] blur-property'><h2 className='text-[1.4rem] text-[#3a47f3] text-center font-extrabold'>My Favorites</h2>
        <div className='flex'>
        <img src={'/teddybear.png'} className='w-[5rem] image-shadow'/>
        <img src={'football.png'} className='w-[5rem] image-shadow'/>
        <img src={'/animated-boy.png'} className='w-[5rem] image-shadow'/></div></div></Link></div>
        {specialMember && <div className='w-[80%] h-[10rem] p-[1rem] bg-[#baf4c0] rounded-[10px] mt-[4rem] flex flex-col items-center'><p className='relative w-fit h-fit px-[4rem] py-[0.4rem] text-[1.4rem] font-extrabold text-[#ffb0b0] rounded-[10px] bg-[#c7f3f6] text-center'>Special Corner</p><p className='text-[0.9rem] text-[#7b7b7b]'>(For special members only.)</p><button className='w-fit h-fit px-[1rem] py-[0.5rem] rounded-[10px] bg-[#f89c9c] text-white mt-[0.8rem] cursor-pointer'>Explore It</button></div>}
        <div className='w-[80%] h-[10rem] p-[1rem] bg-[#baf4c0] rounded-[10px] mt-[4rem] flex flex-col items-center blur-sm'><p className='relative w-fit h-fit px-[4rem] py-[0.4rem] text-[1.4rem] font-extrabold text-[#ffb0b0] rounded-[10px] bg-[#c7f3f6] text-center'>Special Corner</p><p className='text-[0.9rem] text-[#7b7b7b]'>(For special members only.)</p><button className='w-fit h-fit px-[1rem] py-[0.5rem] rounded-[10px] bg-[#f89c9c] text-white mt-[0.8rem]' disabled>Explore It</button></div>
        <div></div>
      </div>
    </div>
  );
}

export default MainPage;
