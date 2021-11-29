import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// GET/comments
export const getAllComments = async () => {
	const response = await axios.get(`${apiUrl}/comments`);
	return response;
};

// GET/comments/comment/:id
export const getSingleCommentFromApi = async (id) => {
	const reponse = await axios.get(`${apiUrl}/comments/comment/${id}`);
	return reponse;
};

// POST/comments/comment
export const createCommentInApi = async (comment) => {
	// const { ...newComment } = comment;
	// console.log("CREATE", newComment);
	const response = await axios.post(`${apiUrl}/comments/comment`, comment);
	alert("Comment created successfully");
	return response;
};

// PUT/comments/comment/:id
export const updateCommentInApi = async (obj) => {
	const { ...comment } = obj;
	const response = await axios.put(
		`${apiUrl}/comments/comment/${obj._id}`,
		comment
	);
	alert("Updated Comment Successfully");
	return response;
};

// DELETE/comments/comment/:id
export const deleteCommentInApi = async (id) => {
	const response = await axios.delete(`${apiUrl}/comments/comment/${id}`);
	return response;
};
