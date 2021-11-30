import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./PostViewCard.css";

import { isAuthenticated } from "../services/authService";
import { deletePostInApi, getSinglePostFromApi } from "../services/postService";
import { useNavigate } from "react-router";

const placeholderImg =
	"https://images.prismic.io/lichess/f54baa80-94ed-4ba1-b42b-afd818ec4b64_Horseybig.png?auto=compress,format";

function PostViewCard({ obj }) {
	const [likes, setLikes] = useState(obj.likes);

	const user = isAuthenticated();
	const navigate = useNavigate();

	function handleClick() {
		setLikes(() => {
			return (obj.likes = likes + 1);
		});
	}
	async function handlePostDelete(event) {
		event.preventDefault();
		const response = await deletePostInApi(obj._id);
		navigate("/gallery");
		window.location.reload();
	}
	return (
		<Card className="border-light">
			<Card.Body>
				<Link to={`/post/${obj._id}`} className="buttonCard btn btn-primary">
					<img
						className="postCardImage"
						src={obj.url ? obj.url : placeholderImg}
						alt=""
					/>
				</Link>

				<div className="card-floor">
					<h6>{obj.user?.name}</h6>
					{(user.id === obj.user?._id || user.role === "ADMIN") && (
						<button
							onClick={handlePostDelete}
							className="form-control btn btn-danger"
							style={{ width: "40px" }}
						>
							<i className="bi bi-trash-fill"></i>
						</button>
					)}
					<h6>
						<button onClick={handleClick} className="fa-icon">
							<i className="bi bi-heart-fill"></i>
						</button>

						{obj.likes}
					</h6>
				</div>
			</Card.Body>
		</Card>
	);
}

export default PostViewCard;
