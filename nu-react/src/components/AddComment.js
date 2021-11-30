// AddComment.js

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createCommentInApi } from "../services/commentService";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../services/authService";
import { Navigate, useParams } from "react-router";

import "../views/Form.css";
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
		<div className="container-comment mt-5">
			<form className="form">
				<h2>Add Comment</h2>
				<div className="form-group">
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
						<i className="bi bi-chat-fill"></i>
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddComment;
