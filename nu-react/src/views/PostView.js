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

import "./PostView.css";
import PostViewCard from "../components/PostViewCard";

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

	return (
		<div className="container-postview mt-5">
			<PostViewCard obj={post} />

			<div className="row">
				<AddComment obj={{ post }} />

				<h2>Comments</h2>
				{loading && (
					<div style={{ textAlign: "center", marginTop: 20 }}>
						<Spinner
							style={{
								height: 80,
								width: 80,
								fontWeight: "bold",
								color: "white",
							}}
							animation="border"
						/>
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
								<CommentCard obj={comment} />
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default PostView;
