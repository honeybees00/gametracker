import React from 'react'
import { useEffect,useState } from 'react'
import {get Game} from './service/api'

export const HomePage = () => {
  const [games,setGames]=useState([]);

  useEffect(()=>{
    const fetch Game=async()=>{
      const data=await get Games();
    },[];
  }

  )
  return (
    <div>HomePage</div>
  )
}
