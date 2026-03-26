import React from 'react'




export const GameCard = () => {
  
    const GameCard=({game})=>

    
      <div className='border p-4 rounded shadow flex justify-betwen'>
        <p>{game.title}</p>
        <p>{game.genre}</p>
      </div>

  
};
export default GameCard;
