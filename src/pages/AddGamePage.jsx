import React from 'react'
import { useState } from 'react'
import {addgame} from '/services/api'



const handleChange=(e)=>
  setForm({
    form,[e.target.name]: e.target.Value,

  });
  const handleSubmit=async (e)={
    e.prevent Default();
    await Addgame(form);
    alert("game added");
  }

export const Addgamepage = () => {
  return (
    <div>Addgamepage</div>
  )
}
