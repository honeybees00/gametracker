import React from 'react'
import { useState } from 'react'
import {addgame} from '/services/api'
import { title } from 'node:process'

//useState lifecycle methods hook into react//



export const Addgamepage = async(game) => {
const [form,setForm]=useState(
  title:"",
  genre:"",
)
  return (
    <div>Addgamepage</div>
  )
}
