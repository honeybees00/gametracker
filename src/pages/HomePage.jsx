import React from 'react'
import { useEffect,useState } from 'react'
import {get games ,setGames} from './service/api'

export const HomePage = () => {
  const [games,setGames]=useState([]);

  useEffect(()=>{
    const fetch games=async()=>{
      const data=await get AddGamesPage();
    },[];
  }

  )
  return (
    <div>HomePage</div>
  )
}
