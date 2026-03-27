import React from 'react'
import { Link } from 'react-router-dom'
import supabase from "../services/supabaseClient";


export default Navbar;
export const Navbar = () => {
  return(
    <nav className='flex justify-between items-center p-4 bg-gray-600 text-white'>
      <h1 className='font-bold'>Game Tracker</h1>
      <div className='flex gap-4'>
        <Navlink to= '/'>Home</Navlink>
        <Navlink to= '/add'>Add Game</Navlink>
      </div>
    </nav>
  )
   

}


