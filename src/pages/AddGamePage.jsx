import React from 'react'
import { useState } from 'react'
import {addgame} from '/services /pages'
import { title } from 'node:process'
import {GameServices}from '/servives'
import supabase from "../services/supabaseClient";




export const Addgamepage = async(game) => (
  
const [form,setForm]=useState(
  title,"",
  genre,"",
)
const handleSubmit=async (e)=>
  e.preventDefault()
await addgame(form)


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-xl shadow-lg w-96">
				<h1 className="text-2xl font-bold mb-4 text-center">
					Give A Review
				</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					<input 
						type="text"
						placeholder="Reviews"
						value={customerName}
						onChange={(e) => setForm(e.target.value)}
						className="w-full border p-2 rounded"/>


					  <div>Addgamepage</div>
    
  
</form>


</div>

</div>

  ))