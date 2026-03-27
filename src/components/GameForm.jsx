import { useState } from "react";
import { title } from "node:process";
import React from "react";
import { error } from "node:console";
const [form, setForm] = useState({
	title: "",
	genre: "",
});

//anytime onChange is needed import useState it updates user input//
export const GameForm = (game) => {
	return (
		//add onchange//

		<div>
			<form>
				<div className="container border rounded-xl p-2 bg-gray-700-gray-m-3">
					<label>title</label>
					<input type="text" placeholder="Game Title" />
					<input
						value={form.title}
						onChange={(e) => setForm({ GameForm, title: e.target.value })}/>
					<option>Game Title</option>
					<label>Genre</label>
					<input type="text" placeholder="Genre" />
					<input
						value={form.genre}
						onChange={(e) => setForm({ GameForm, genre: e.target.value })}/>
					<option>Genre</option>
					<button className="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};
e.preventDefault;
