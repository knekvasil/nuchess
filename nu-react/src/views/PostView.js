// PostView.js

import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/authService";
import { deletePostInApi, getSinglePostFromApi } from "../services/postService";

function PostView() {
	const [post, setPost] = useState({});
	const { id } = useParams();
	const user = isAuthenticated();
	console.log(user);

	useEffect(() => {
		getSinglePost();
	}, []);

	async function getSinglePost() {
		const response = await getSinglePostFromApi(id);
		setPost(response.data);
	}

	async function handleDelete(event) {
		event.preventDefault();
		const response = await deletePostInApi(id);
		return <Navigate to="/gallery" />;
	}
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<h2 style={{ fontWeight: "bold", marginTop: "40px" }}>
						{post.user?.name}
					</h2>

					<h4> {post.likes}</h4>
					{user.role === "ADMIN" && (
						<Link to={`/editPost/${id}`} className="btn-outline-dark btn">
							Edit
						</Link>
					)}
				</div>
				{user.id === post.user.id && (
					<button
						onClick={handleDelete}
						className="form-control btn btn-danger"
					>
						Delete Post
					</button>
				)}
				<div className="col-lg-6 col-md-6 col-sm-12">
					<img
						style={{ width: 300, margin: "40px auto", display: "flex" }}
						src={post.url}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default PostView;
