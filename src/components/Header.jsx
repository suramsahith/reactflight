
import { GiRocketFlight } from "react-icons/gi";
// import React from 'react'

const Header = () => {
  return (
   <header className='w-full p-4 bg-slate-50'>
    <nav className='flex items-center justify-between max-w-6x1 mx-auto'>
        <a href ="/" className='text-lg font-blod  flex items-center'> <GiRocketFlight className="text-2x1 mr-1 text-indigo-800 "/> Travel Logo</a>
        <button className='bg-indigo-600 text-white px-6 py-2 rounded font-medium'>Login</button>
    </nav>
   </header>
  )
}

export default Header
 
