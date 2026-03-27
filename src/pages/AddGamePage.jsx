import React, { useState } from "react";
import  {addGame}  from "../services/GameServices";
import { useNavigate } from "react-router-dom";
import { GameForm } from "../components/GameForm";
export const AddGamePage = () => {
	
const navigate = useNavigate();
	const AddNewGame= async (newGame) => {
		
		await addGame(newGame);
  navigate("/")
	};

	
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-xl shadow-lg w-96">
				<h1 className="text-2xl font-bold mb-4 text-center">Add a Game</h1> 
      <GameForm onSubmit={AddNewGame}/> 
				
			</div>
		</div>
	);
};


