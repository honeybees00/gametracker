import React from 'react'
import { NavLink } from 'react-router-dom'




export const Navbar = () => {
  return(
    <nav className='flex justify-between items-center p-4 bg-gray-600 text-white'>
      <h1 className='font-bold'>Game Tracker</h1>
      <div className='flex gap-4'>
        <NavLink to= '/'>Home</NavLink>
        <NavLink to= '/add'>Add Game</NavLink>
        
      </div>
    </nav>
  )
   

}


