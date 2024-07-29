import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <nav className=' flex flex-row space-x-4 bg-gray-700 min-w-96 h-fit p-8 justify-center items-center' >
        <NavLink to = '/' c className={({isActive})=> `border border-teal-500 p-4 text-white ${isActive ? "text-blue-500 font-semibold ":""}`}>Home</NavLink>
        <NavLink to='/about' className={({isActive})=> `border border-teal-500 p-4 text-white ${isActive ? "text-blue-500 font-semibold":""}`}>About</NavLink>
    </nav>
  )
}

export default Navbar