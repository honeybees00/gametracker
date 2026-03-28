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
		<div className="container border rounded-xl p-2 bg-gray-700-gray-m-3">
			<form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
				
					<label>title</label>
					<input
						className="border p-2 shadow-md mb-3"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type="text"
					/>
					<label>genre</label>
					<input
						className="border p-1 shadow-md mb-3"
						value={genre}
						onChange={(e) => setGenre(e.target.value)}
						type="text"
					/>
					<label>rating</label>
					<input
						className="border p-1 shadow-md mb-3"
						value={rating}
						onChange={(e) => setRating(e.target.value)}
						type="text"
					/>
					<button
						className="bg-gray-800 border p-1 shadow-lg hover:bg-gray-500 text-white"
						type="submit"
					>
						Submit
					</button>
				
			</form>
		</div>
    
	);
};

