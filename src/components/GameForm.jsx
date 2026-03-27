import { useState } from 'react';
import { title } from 'node:process';
import React from 'react'
//anytime onChange is needed import useState it updates user input//
export const GameForm = (game) => {
  return (
    //add onchange//

    <div>
      <div className='container border rounded-xl p-2 bg-gray-700-gray-m-3'>
      <input type="text"placeholder='Game Title'/>
      <input type="text"placeholder='Genre'/>

       <input value={(e)=>setForm({GameForm,title:e.target.Value})}/>
      <button className='success'>Submit</button>
    </div>
    </div>
  )};
e.preventDefault;

  