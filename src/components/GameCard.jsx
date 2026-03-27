import React from "react";
import { GameForm } from "./GameForm";

const GameCard = ({ game,onDelete }) => (
	<div className="container">
    <div className="row">
      
      <div className="border border-gray-400 p-4 rounded-lg shadow-md flex justify-between items-center bg bg-white hover:shadow-lg transition-shadow">
			<p className="text-lg font-semibold text-gray-800">{game.title}</p>
			<p className="text-sm text-gray-600">{game.genre}</p>
      	<p className="text-sm text-gray-600">{game.rating}</p>
        <button onClick={()=>onDelete(game.id)}>Delete</button>
		</div>
    
	</div>
  
</div>
);

export default GameCard;
  
