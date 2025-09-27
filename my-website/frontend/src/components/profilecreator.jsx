import React, { useState,useRef, useEffect,createContext } from 'react'
import * as FaIcons from 'react-icons/fa'
import './profileCreator.css'

function profilecreator({rawMonth,setRawMonth,rawDate,setRawDate,rawYear,setRawYear,userName,setUserName,secreteCode,setSecreteCode,specialMember,setSpecialMember}) {
    const[image,setImage] = useState(null)
    const fileInputRef = useRef(null)
    const[uploaded,setUploaded]= useState(false)
    const [errorForDob, setErrorForDob] = useState('')
    const [errorInDob, setErrorInDob] = useState(false)
    const [dob, setDob] = useState('')
    const [codeShowing, setCodeShowing] = useState(false)

    const handleImageChange= (e) =>{
        const file = e.target.files[0];
        if(file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);setUploaded(true)
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
        
    }

    const removeImage = () => {
        setImage(null)
        setUploaded(false)
    }

    const handleSubmit = () => {
      // e.preventDefault();

      const d = Number(rawDate)
      const m = Number(rawMonth)
      const y = Number(rawYear)

      if(!d || !m || !y){
        setErrorForDob('Please fill all the columns of Date of Birth.')
        setDob('')
        setErrorInDob(true)
        return;
      }

      else if(d < 1 || d > 31){
        setErrorForDob("Enter a valid date.")
        setDob('')
        setErrorInDob(true)
        return;
      }

      else if(m < 1 || m > 12){
        setErrorForDob("Enter a valid month.")
        setDob('')
        setErrorInDob(true)
        return;
      }

      else if(y < 1950 || y > 2023){
        setErrorForDob("Enter a valid year.")
        setDob('')
        setErrorInDob(true)
        return;
      }


      if (secreteCode == 256784){
        setSpecialMember(prevMember => !prevMember)
      }

      setErrorInDob(false)
      setError('');
      setDob(`${d.toString().padStart(2, '0')}/${m.toString().padStart(2, '0')}/${y}`);

      console.log(secreteCode)
  };

  const showCode = () => {
    setCodeShowing(prevCode => !prevCode)
  }

  const codePrevention = (e) => {
  const value = e.target.value;
  if (/^\d{0,6}$/.test(value)) {
    setSecreteCode(value);
  }
};


  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center bg-[#9f9d9f]'>
    <div className='flex flex-col justify-center items-center w-fit h-fit p-[2rem] rounded-[10px] bg-[#c8c1f3] shadow-2xl shadow-black'>
      <div className='relative w-[10rem] h-[10rem] rounded-full group bg-white overflow-hidden cursor-pointer'
      onClick={triggerFileInput}>
        <img
        src={image || 'Unknown_person.jpg'}
        alt="Profile Image"
        className='w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80'
        />
        <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300'>
            <FaIcons.FaUpload className= 'text-3xl text-[#636363]'/>
        </div>
        <input
        type='file'
        accept='/image'
        ref={fileInputRef}
        onChange={handleImageChange}
        className='hidden'
        />
      </div>
      {!uploaded && <p className='text-[#757575] mt-[0.5rem]'>Upload Your Image</p>}
      {uploaded && <div><button onClick={removeImage} className='w-fit h-fit bg-[#f4a2f6] px-4 py-2 cursor-pointer mt-[0.7rem] rounded-[10px]'>Remove Image</button></div>}
      <div className='flex flex-col gap-0 mt-[2rem]'><label htmlFor='name' className='text-[0.9rem] font-extrabold text-white ml-1'>Name:</label>
    <input type='text' id='name' value={userName} className='bg-[#d5f3d3] w-[20rem] h-[3rem] rounded-[10px] pl-[1rem] text-[1.1rem]' onChange={(e)=>setUserName(e.target.value)} placeholder='Your Sweet Name'/></div>   
    <div className='flex flex-col gap-0 mt-[1rem]'>
      <label className='text-[0.9rem] font-extrabold text-white ml-1'>Date of Birth:</label>
      <div className='flex gap-2'>
      <input type='number' id='DD' placeholder='DD' value={rawDate} onChange={(e) => setRawDate(e.target.value)} className='bg-[#f2f4c8] w-[6rem] h-[3rem] rounded-[10px] pl-[1rem] text-[1.1rem] appearance-none'/>
      <input type='number' id='MM' placeholder='MM' value={rawMonth} onChange={(e) => setRawMonth(e.target.value)} className='bg-[#f2f4c8] w-[6rem] h-[3rem] rounded-[10px] pl-[1rem] text-[1.1rem]' />
      <input type='number' id='MM' placeholder='YY' value={rawYear} onChange={(e) => setRawYear(e.target.value)} className='bg-[#f2f4c8] w-[6rem] h-[3rem] rounded-[10px] pl-[1rem] text-[1.1rem]' />
      </div>
      {errorInDob && <p className='text-[0.8rem] text-[white] text-center'>{errorForDob}</p>}
    </div>
    <div className='flex flex-col mt-[1rem]'>
      <label className='text-[0.9rem] font-extrabold text-white ml-1'>Secrete Code(If you had)</label>
      <input type={codeShowing ? 'number' : 'password' } value={secreteCode == 0 ? '' : secreteCode} placeholder='Enter Secrete Code' className='bg-[#d5f3d3] w-[20rem] h-[3rem] rounded-[10px] pl-[1rem] text-[1.1rem]' onChange={codePrevention}/>
      <div className='flex gap-2 ml-[0.5rem] mt-[0.3rem]'><input type='checkbox' onClick={showCode} className='w-4'/>
      <p className='text-[0.9rem] font-extrabold'>{codeShowing ? 'Hide Password' : 'Show Password'}</p></div>
    </div>
    {specialMember && <p>Hii</p>}
    <button onClick={handleSubmit} className='w-fit h-fit py-[0.5rem] px-[1rem] rounded-[10px] bg-[#b194ef] mt-[1rem] cursor-pointer'><input type='submit' value=''/>Create Profile</button>
    </div>
    
    </div>
  )
}

export default profilecreator

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
