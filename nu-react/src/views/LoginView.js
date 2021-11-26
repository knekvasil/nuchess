// LoginView.js

import { useState } from "react";
import { useNavigate } from "react-router";
import { loginUserToApi } from "../services/authService";

import "./Form.css";

function LoginView() {
	const navigate = useNavigate();
	const [user, setUser] = useState({ email: "", password: "" });

	function handleChange(event) {
		setUser({ ...user, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const userResponse = await loginUserToApi(user);
			navigate("/");
			await window.location.reload();
		} catch (error) {
			console.log(error);
		}
		setUser({ email: "", password: "" });
	}

	return (
		<div className="container mt-5">
			<form className="form">
				<h2>Login View</h2>
				<input
					onChange={handleChange}
					name="email"
					value={user.email}
					className="form-control"
					type="text"
					placeholder="email"
				/>
				<input
					onChange={handleChange}
					name="password"
					value={user.password}
					className="form-control"
					type="password"
					placeholder="password"
				/>
				<button onClick={handleSubmit} className="form-control btn btn-success">
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginView;
