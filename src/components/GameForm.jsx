import React from 'react'

export const GameForm = (game) => {
  return (

    <div>
      <input type="text"placeholder='Game Title'/>
      <input type="text"placeholder='Genre'/>
      <button className='success'>Submit</button>
    </div>
  )
}
