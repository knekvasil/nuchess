// CommentCard.js

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./PostCard.css";

import { deleteCommentInApi } from "../services/commentService";
import { isAuthenticated } from "../services/authService";

function CommentCard({ obj }) {
	const [likes, setLikes] = useState(obj.likes);
	const user = isAuthenticated();

	function handleClick() {
		setLikes(() => {
			return (obj.likes = likes + 1);
		});
	}

	async function handleCommentDelete(event, commentId) {
		console.log(commentId);
		event.preventDefault();
		const response = await deleteCommentInApi(commentId);
		window.location.reload();
	}

	return (
		<Card>
			<Card.Body>
				<h6>{obj.text}</h6>
				<div className="supraflex">
					<h6>{obj.user.name} </h6>
					{(user.id === obj.user?._id || user.role === "ADMIN") && (
						<button
							onClick={(event) => handleCommentDelete(event, obj._id)}
							className="form-control btn btn-danger"
							style={{ width: "40px" }}
						>
							<i className="bi bi-trash-fill"></i>
						</button>
					)}
					<div className="rightflex">
						<button onClick={handleClick} className="fa-icon">
							<i className="bi bi-heart-fill"></i>
						</button>

						<h6>{obj.likes}</h6>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}

export default CommentCard;
