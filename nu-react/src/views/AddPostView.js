// AddPostView.js

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { isAuthenticated } from "../services/authService";
import { createPostInApi, getSinglePostFromApi } from "../services/postService";

// import "./AddPostView.css";

function AddPostView() {
	const navigate = useNavigate();
	const user = isAuthenticated();
	const [post, setPost] = useState({ url: "", likes: 0, user: `${user.id}` });

	function handleChange(event) {
		setPost({ ...post, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		await createPostInApi(post);
		navigate("/gallery");
		window.location.reload();
	}

	return (
		<>
			<div className="container">
				<div className="row" style={{ margin: "0 auto" }}>
					<div className="col-lg-6 col-md-6 col-sm-12">
						<form className="form">
							<h2>Add New Post</h2>
							<input
								name="url"
								value={post.url}
								onChange={handleChange}
								placeholder="game url"
								type="text"
								className="form-control"
							/>
							<button
								onClick={handleSubmit}
								className="form-control btn btn-primary"
							>
								Add New Post
							</button>
						</form>
						;
					</div>
				</div>
			</div>
		</>
	);
}

export default AddPostView;
