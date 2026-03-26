import React from 'react'
import { Addgamepage } from '../pages/Addgamepage';
const supabase_url = import.meta.env.VITE_SUPABASE_URL;
const supabase_anon_key = import.meta.env.VITE_SUPABASE_URLVITE_SUPABASE_ANON_KEY;


export const getGames=async () => {
  const newUrl=${supabase_url}=Addgamepage;
  const response=await fetch(newUrl,VITE_SUPABASE_URL){
    method:Get
    headers:{
      'api':VITE_SUPABASE_URL
    }
  }
  if(response.ok){
    const data=await response.json();
    return data;
  }else{
    
      const data=[]
      return(

    ),
    
  }

  



    
    <div>GameServices</div>
  )
}
