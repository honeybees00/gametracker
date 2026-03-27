import React from 'react'
import { useState } from 'react'
import {addgame} from '/services /pages'
import { title } from 'node:process'
import {GameServices}from '/servives'



export const Addgamepage = async(game) => {
const [form,setForm]=useState(
  title,"",
  genre,"",
)
  return (
    <div>Addgamepage</div>
  )
}
