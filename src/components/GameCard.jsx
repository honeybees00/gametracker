import React from "react";
import { GameForm } from "./GameForm";

const GameCard = ({ game,onDelete }) => (
	
<div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
	<div class="md:flex">
		<div class="md:shrink-0">
			<img
				className="h-48 w-full object-cover md:h-full md:w-48"
				src="/img.avif"
				alt="Game"
			/>
		</div>
		<div className="p-8">
			<div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
				{game.title}
			</div>
			<p className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
				{game.genre}
			</p>
			<p className="mt-2 text-gray-500">{game.rating}</p>
			<button className="bg-red-600 border rounded p-2 shadow" onClick={() => onDelete(game.id)}>Delete</button>
		</div>
	</div>
</div>
      
      
	
);

export default GameCard;
  
