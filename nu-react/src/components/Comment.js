// CommentCard.js

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./PostCard.css";

function CommentCard({ obj }) {
	return (
		<Card>
			<Card.Body>
				<Card.Title>Submitted by: {obj.user.name}</Card.Title>
				<h6>{obj.text}</h6>
				<h6>🤍 {obj.likes}</h6>
			</Card.Body>
		</Card>
	);
}

export default CommentCard;
