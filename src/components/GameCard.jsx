import React from "react";

const GameCard = ({ game }) => (
	<div className="container">
		<div className="border p-4 rounded shadow flex justify-between">
			<p>{game.title}</p>
			<p>{game.genre}</p>
		</div>
	</div>
);

export default GameCard;