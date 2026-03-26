import React from 'react'
import { useEffect,useState } from 'react'
import {get Games ,setGames} from './service/api'
import GameCard from '../components/GameCard'

export const Home = () => {
  const [games,setGames]=useState([]);

  useEffect(()=>{
    const fetch Games=async()=>{
      const data=await get get Games();
      fetch Games();
    },[];
  }

  )
  //filter//
  const action.Games=games.filter(
    (game)=> game.genre==="Action"
    ;
  )
  return (
    <div className='p-6 flex flex-col gap-4'>
      <h2 className='text-xl font-bold'>All Games</h2>
      {games.map({game.id})game={game}}
      <h2 className='text-xl font-bold mt-6'>Action Games</h2>
      {action Games.map((game)=>(
        <GameCard key={game.id}game={game}/>
      )

      )}
    </div>
  )
};
export default Home;
