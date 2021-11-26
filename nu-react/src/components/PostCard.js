import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./PostCard.css";

const placeholderImg =
	"https://images.prismic.io/lichess/f54baa80-94ed-4ba1-b42b-afd818ec4b64_Horseybig.png?auto=compress,format";

const PostCard = ({ obj }) => {
	return (
		<Card style={{ width: "15rem" }}>
			<Card.Body>
				<Card.Title>Submitted by: {obj.name}</Card.Title>
				<img
					className="postCardImage"
					src={obj.url ? obj.url : placeholderImg}
					alt=""
				/>
				<Link to={`/post/${obj._id}`} className="buttonCard btn btn-primary">
					View More
				</Link>
			</Card.Body>
		</Card>
	);
};

export default PostCard;
