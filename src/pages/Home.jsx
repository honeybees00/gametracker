import React, { useEffect, useState } from "react";
import { getGames } from "./service/token";
import { GameCard } from "../components/GameCard";

export const Home = () => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		const fetchGames = async () => {
			const data = await getGames();
			setGames(data);
		};
		fetchGames();
	}, []);

	const actionGames = games.filter((game) => game.genre === "action");

	return (
		<div className="container">
			<div className="p-6 flex flex-col gap-4">
				<h2 className="text-xl font-bold">All Games</h2>

				<h2 className="text-xl font-bold mt-6">Action Games</h2>
				<div>
					{actionGames.map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
