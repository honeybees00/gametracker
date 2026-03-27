import { useState } from 'react';
import { title } from 'node:process';
import React from 'react'
//anytime onChange is needed import useState it updates user input//
export const GameForm = (game) => {
  return (
		//add onchange//

		<div>
      <form>
			<div className="container border rounded-xl p-2 bg-gray-700-gray-m-3">
				<label>title</label>
				<input type="text" placeholder="Game Title" />
				<input type="text" placeholder="Genre" />
				<input
					value={form.Title}
					onChange={(e) => setForm({ GameForm, title: e.target.Value })}
				/>
				<label>Genre</label>
				<select
					onChange={(e) => setform({ GameForm, genre: e.target.Value })}/>
          <option>Genre</option>
    <button className="submit">Submit</button>
			</div>
      </form>
		</div>
    
	);};
e.preventDefault;

  