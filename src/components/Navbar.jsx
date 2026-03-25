import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return(
    <nav className='flex justify-between item-center p-4 bg-gray-600 text-white'>
      <h1 className='font-bold'>Game Tracker</h1>
      <div className='flex gap-4'>
        <link to= '/'>Home</link>
        <link to= '/add'>Add Game</link>
      </div>
    </nav>
  )
   
export default Navbar;
  },

