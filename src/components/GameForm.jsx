import { useState } from "react";
import React from "react";



//anytime onChange is needed import useState it updates user input//
export const GameForm = ({onSubmit}) => {
  const [title,setTitle] = useState("");
  const [genre,setGenre]= useState("")
  const [rating, setRating] = useState(1);
  const handleSubmit=(e)=>{
    e.preventDefault()
    onSubmit({title,genre,rating:parseInt(rating)})
  }
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="container border rounded-xl p-2 bg-gray-700-gray-m-3">
					<label>title</label>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type="text"
					/>
					<label>genre</label>
					<input
						value={genre}
						onChange={(e) => setGenre(e.target.value)}
						type="text"
					/>
					<label>rating</label>
					<input
						value={rating}
						onChange={(e) => setRating(e.target.value)}
						type="text"
					/>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

