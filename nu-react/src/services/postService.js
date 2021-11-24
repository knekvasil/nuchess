import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// GET/posts
export const getAllPosts = async () => {
	const response = await axios.get(`${apiUrl}/posts`);
	return response;
};

// GET/posts/post/:id
export const getSinglePostFromApi = async (id) => {
	const reponse = await axios.get(`${apiUrl}/posts/post/${id}`);
	return reponse;
};

// POST/posts/post
export const createPostInApi = async (post) => {
	const { ...newPost } = post;
	console.log("CREATE", newPost);
	const response = await axios.post(`${apiUrl}/posts/post`, newPost);
	alert("Post created successfully");
	return response;
};

// PUT/posts/post/:id
export const updatePostInApi = async (obj) => {
	const { ...post } = obj;
	const response = await axios.put(`${apiUrl}/posts/post/${obj._id}`, post);
	alert("Updated Post Successfully");
	return response;
};

// DELETE/posts/post/:id
export const deletePostInApi = async (id) => {
	const response = await axios.delete(`${apiUrl}/posts/post/${id}`);
	return response;
};
