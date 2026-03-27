import React from 'react'
import { Addgamepage } from '../pages/Addgamepage';
const url=import.meta.env.VITE_SUPABASE_URL;
const token=import.meta.env.VITE_SUPABASE_URLVITE_SUPABASE_ANON_KEY;


export const getGames=async () => {
  const newUrl=$({supabase_url})=Addgamepage;
  const response=await fetch(newUrl, {
    method:"Get",
    headers:{
      'apikey':token
    }
  });
  if (response.ok){
    const data=await response.json();
    return data;
  }else{
    
      const data=[]
      return(
      

  



    
    <div>GameServices</div>
      )
      }
    };
  
