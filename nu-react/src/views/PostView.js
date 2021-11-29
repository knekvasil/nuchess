// PostView.js

import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import CommentCard from "../components/Comment";
import { isAuthenticated } from "../services/authService";
import { deletePostInApi, getSinglePostFromApi } from "../services/postService";
import { deleteCommentInApi, getAllComments } from "../services/commentService";
import { useNavigate } from "react-router";

import AddComment from "../components/AddComment";

function PostView() {
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	const user = isAuthenticated();
	const navigate = useNavigate();

	useEffect(() => {
		getSinglePost();
		getComments();
	}, []);

	async function getComments() {
		setLoading(true);
		setTimeout(async () => {
			const response = await getAllComments();
			setComments(response.data);
			setLoading(false);
		}, 2000);
	}

	async function getSinglePost() {
		const response = await getSinglePostFromApi(id);
		setPost(response.data);
	}

	async function handlePostDelete(event) {
		event.preventDefault();
		const response = await deletePostInApi(id);
		navigate("/gallery");
		window.location.reload();
	}

	async function handleCommentDelete(event, commentId) {
		console.log(commentId); // = UNDEFINED
		event.preventDefault();
		const response = await deleteCommentInApi(commentId);
		window.location.reload();
	}
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<h2 style={{ fontWeight: "bold", marginTop: "40px" }}>
						{post.user?.name}
					</h2>
					<h4> {post.likes}</h4>
				</div>

				{(user.id === post.user?._id || user.role === "ADMIN") && (
					<button
						onClick={handlePostDelete}
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

				<AddComment obj={{ post }} />

				<h2>Comments</h2>
				{loading && (
					<div style={{ textAlign: "center", marginTop: 20 }}>
						<Spinner
							style={{ height: 80, width: 80, fontWeight: "bold" }}
							animation="border"
						/>
						<h4>Loading comments...</h4>
					</div>
				)}
				<div className="row postCards">
					{comments
						.filter((comment) => comment.post?._id === post?._id)
						.map((comment) => (
							<div
								key={comment._id}
								className="cardBox col-lg-3 col-md-4 col-sm-6 col-xs-12"
							>
								{(user.id === comment.user?._id || user.role === "ADMIN") && (
									<button
										onClick={(event) => handleCommentDelete(event, comment._id)}
										className="form-control btn btn-danger"
									>
										Delete Comment
									</button>
								)}
								<CommentCard obj={comment} />
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default PostView;
