import React, { useState } from "react";
import { addGame } from "../services/pages";
import supabase from "../services/supabaseClient";

export const AddGamePage = () => {
	const [form, setForm] = useState({
		title: "",
		genre: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		await addGame(form);
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-xl shadow-lg w-96">
				<h1 className="text-2xl font-bold mb-4 text-center">Add a Game</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						name="title"
						placeholder="Game Title"
						value={form.title}
						onChange={handleChange}
						className="w-full border p-2 rounded"
					/>
					<input
						type="text"
						name="genre"
						placeholder="Genre"
						value={form.genre}
						onChange={handleChange}
						className="w-full border p-2 rounded"
					/>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
					>
						Add Game
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddGamePage;
