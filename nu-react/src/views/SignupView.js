// SignupView.js

import { useState } from "react";
import { signUpUser } from "../services/authService";

import "./Form.css";

function SignupView() {
	const [user, setUser] = useState({ name: "", email: "", password: "" });

	async function handleChange(event) {
		setUser({ ...user, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		signUpUser(user);
		setUser({ name: "", email: "", password: "" });
		alert("User Created");
	}

	return (
		<div className="container-form mt-5">
			<form className="form">
				<h2>Sign Up</h2>
				<input
					value={user.name}
					name="name"
					onChange={handleChange}
					placeholder="name"
					type="text"
					className="form-control"
				/>
				<input
					value={user.email}
					onChange={handleChange}
					name="email"
					placeholder="email"
					type="text"
					className="form-control"
				/>
				<input
					value={user.password}
					onChange={handleChange}
					name="password"
					placeholder="password"
					type="password"
					className="form-control"
				/>
				<button onClick={handleSubmit} className="form-control btn btn-success">
					<i class="bi bi-person-plus-fill"></i>
				</button>
			</form>
		</div>
	);
}

export default SignupView;
