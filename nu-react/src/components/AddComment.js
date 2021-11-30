// AddComment.js

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createCommentInApi } from "../services/commentService";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../services/authService";
import { getSingleCommentFromApi } from "../services/commentService";
import { Navigate, useParams } from "react-router";

import "./PostCard.css";
import { getSinglePostFromApi } from "../services/postService";

function AddComment() {
	const user = isAuthenticated();
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [comment, setComment] = useState({
		post: "",
		user: "",
		likes: 0,
		text: "",
	});

	useEffect(() => {
		getComment();
	}, [id]);

	async function getComment() {
		const response = await getSinglePostFromApi(id);
		setPost(response.data);
	}

	function handleChange(event) {
		setComment({ ...comment, [event.target.name]: event.target.value });
		console.log("POST", comment[""]);
	}

	function handleSubmit(event) {
		event.preventDefault();
		let commentObj = {
			post: post._id,
			user: user.id,
			text: comment[""],
			likes: 0,
		};
		createCommentInApi(commentObj);
		window.location.reload();
	}

	return (
		<Card>
			<Card.Body>
				<Card.Title>Add Comment:</Card.Title>
				<form className="form">
					<div class="form-group">
						<label for="exampleFormControlTextarea1">Example textarea</label>
						<textarea
							class="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							onChange={handleChange}
						></textarea>
						<button
							onClick={handleSubmit}
							className="form-control btn btn-primary"
						>
							Add New Comment
						</button>
					</div>
				</form>
			</Card.Body>
		</Card>
	);
}

export default AddComment;
