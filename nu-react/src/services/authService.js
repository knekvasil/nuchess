import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const tokenString = "jwtcoffeegallery";

// POST/Login
export const loginUserToApi = async (user) => {
	const response = await axios.post(`${apiUrl}/auth/login`, user);
	try {
		console.log(response.data);
		if (response.data) {
			const { _id, role, name } = response.data;
			localStorage.setItem(
				tokenString,
				JSON.stringify({ id: _id, role, name })
			);
		}
	} catch (error) {
		console.log(error);
	}
	return response;
};

// POST/Signup
export const signUpUser = async (user) => {
	const response = await axios.post(`${apiUrl}/auth/signup`, user);
	return response;
};

// isAuth()
export const isAuthenticated = () => {
	if (typeof window == "undefined") {
		return false;
	}
	if (localStorage.getItem(tokenString)) {
		return JSON.parse(localStorage.getItem(tokenString));
	}
	return false;
};

export const logOut = () => {
	localStorage.removeItem(tokenString);
	window.location.reload();
};
