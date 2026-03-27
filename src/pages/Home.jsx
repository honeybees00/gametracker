import React, { useEffect, useState } from "react";
import { deleteGame, getGames } from "../services/GameServices";
import  GameCard  from "../components/GameCard";

export const Home = () => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		
		fetchGames();
	}, []);
const fetchGames = async () => {
	const data = await getGames();
	setGames(data);
};
	const actionGames = games.filter((game) => game.genre === "action");
  const handleDelete=async (id)=>{
    await deleteGame(id)
    setGames(games.filter((game)=>game.id!==id))
  }
	return (
		<div className="container">
			<div className="p-6 flex flex-col gap-4">
				<h2 className="text-xl font-bold">All Games</h2>
				{games.map((game) => (
					<GameCard key={game.id} game={game} 
          onDelete={handleDelete} />
				))}
				<h2 className="text-xl font-bold mt-6">Action Games</h2>
				<div>
					{actionGames.map((game) => (
						<GameCard key={game.id} game={game}
            onDelete={handleDelete} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
