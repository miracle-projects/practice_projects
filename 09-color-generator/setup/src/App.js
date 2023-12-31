import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values('#f15034').all(10 ));

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(10);
			setList(colors);
		} catch (error) {
			console.log(error);
			setError(true);
		}
	};
	return (
		<div>
			<section className="container">
				<h3>Color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="#f155025"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						className={`${error ? "error" : null}`}
					/>
					<button className="btn">Submit</button>
				</form>
			</section>
			<section className="colors">
        {list.map((color, index) => {
          console.log(color);
					return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />;
				})}
			</section>
		</div>
	);
}

export default App;
