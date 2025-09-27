import React, { useState,useEffect, use } from 'react'
import { ImageProvider } from './components/profilecreator';
import * as FaIcons from 'react-icons/fa';
import './App.css'
import Welcomepage from './components/Welcomepage';
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import ProfileCreator from './components/profilecreator'
import Mainpage from './components/mainpage';
import Diarypage from './components/diarypage';
import Memoriespage from './components/memoriespage'; 
import Favouritepage from './components/favouritepage';
import Detailpage from './components/detailpage';



function App() {
    const [specialMember,setSpecialMember] = useState(true)
    const [rawMonth, setRawMonth] = useState('')
    const [rawDate, setRawDate] = useState('')
    const [rawYear, setRawYear] = useState('')
    const [userName, setUserName] = useState('')
    const [secreteCode , setSecreteCode] = useState(0)
    const [msg,setMsg] = useState("");

 const router= createBrowserRouter(
  [
    {
      path: '/profilecreator',
      element: <ProfileCreator rawMonth={rawMonth} setRawMonth={setRawMonth} 
      rawDate={rawDate} setRawDate={setRawDate} rawYear= {rawYear} setRawYear={setRawYear}
      userName={userName} setUserName={setUserName} secreteCode={secreteCode} setSecreteCode={setSecreteCode}
      specialMember={specialMember} setSpecialMember={setSpecialMember}/>
    },
    {
      path: '/welcomepage',
      element: <Welcomepage specialMember={specialMember} setSpecialMember={setSpecialMember} secreteCode={secreteCode} setSecreteCode={setSecreteCode}/>
    },
    {
      path: '/mainpage',
      element: <ImageProvider><Mainpage userName={userName} setUserName={setUserName} specialMember={specialMember}
       setSpecialMember={setSpecialMember} secreteCode={secreteCode} setSecreteCode={setSecreteCode}/></ImageProvider>
    },
    {
      path: '/diarypage',
      element: <Diarypage/>
    },
    {
      path: '/memoriespage',
      element: <Memoriespage/>
    },
    {
      path: '/favouritepage',
      element: <Favouritepage msg={msg} setMsg={setMsg}/>
    },
    {
      path: '/detailpage',
      element: <Detailpage/>
    },
    {
      path: '*',
      element: <p>Page not found.</p>
    }
  ]
 )


  return (
    <div>
    <RouterProvider router={router}/>

    </div>
  )
}

export default App
