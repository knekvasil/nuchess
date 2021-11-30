import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./PostCard.css";

const placeholderImg =
	"https://images.prismic.io/lichess/f54baa80-94ed-4ba1-b42b-afd818ec4b64_Horseybig.png?auto=compress,format";

function PostCard({ obj }) {
	const [likes, setLikes] = useState(obj.likes);

	function handleClick() {
		setLikes(() => {
			return (obj.likes = likes + 1);
		});
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
					<h6>{obj.user.name}</h6>
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

export default PostCard;
