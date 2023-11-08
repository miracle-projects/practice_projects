import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName && email) {
			const person = {id: new Date().getTime().toString(),firstName, email };
			setPeople((prePeople) => {
				return [...prePeople, person];
      });
      setFirstName('')
      setEmail('')
		}
		console.log(firstName, email);
	};

	return (
		<>
			<article>
				<form className="form" onSubmit={handleSubmit}>
					<div className="form-control">
						<label htmlFor="firstName">Name :</label>
						<input
							value={firstName}
							type="text"
							id="firstName"
							name="firstName"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="email">Email :</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							type="email"
							id="email"
							name="email"
						/>
					</div>
					<button type="submit">add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        })}
			</article>
		</>
	);
};

export default ControlledInputs;
