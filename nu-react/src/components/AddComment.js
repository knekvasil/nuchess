// AddComment.js

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createCommentInApi } from "../services/commentService";
import { useEffect, useState } from "react";

import "./PostCard.css";

function AddComment({ obj }) {
	console.log("were in AddComment.js!!!!", obj.post._id, obj.user.id);
	const [comment, setComment] = useState({
		post: obj?.post._id,
		user: obj?.user.id,
		likes: 0,
		text: "",
	});

	function handleChange(event) {
		setComment({ ...comment, [event.target.name]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		createCommentInApi(comment);
		window.location.reload();
	}

	return (
		<Card>
			<Card.Body>
				<Card.Title>Add Comment:</Card.Title>
				<form className="form">
					<input
						name="text"
						value={comment.text}
						onChange={handleChange}
						placeholder="comment"
						type="text"
						className="form-control"
					/>

					<button
						onClick={handleSubmit}
						className="form-control btn btn-primary"
					>
						Add New Comment
					</button>
				</form>
			</Card.Body>
		</Card>
	);
}

export default AddComment;
