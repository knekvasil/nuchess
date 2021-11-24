import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// GET/users
export const getAllUsers = async () => {
	const response = await axios.get(`${apiUrl}/users`);
	return response;
};

// GET/users/user/:id
export const getSingleUserFromApi = async (id) => {
	const response = await axios.get(`${apiUrl}/users/user/${id}`);
	return response;
};

// POST/users/user
export const createUserInApi = async (user) => {
	const { image, ...newUser } = user;
	console.log("CREATE", newUser);
	const response = await axios.post(`${apiUrl}/users/user`, newUser);
	await imageUploadToApi(response.data._id, image);
	alert("User created successfully");
};

// POST/image
export const imageUploadToApi = async (id, img) => {
	const formData = new FormData();
	formData.append("image", img);
	const response = axios.post(
		`${apiUrl}/users/user/imageUpload/${id}`,
		formData
	);
	return response;
};

// PUT/users/user/:id
export const updateUserInApi = async (obj) => {
	const { image, ...user } = obj;
	const response = await axios.put(`${apiUrl}/users/user/${obj._id}`, user);
	alert("Updated User Successfully");
	return response;
};

// DELETE/users/user/:id
export const deleteUserInApi = async (id) => {
	const response = await axios.delete(`${apiUrl}/users/user/${id}`);
	return response;
};
