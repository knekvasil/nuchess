import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./PostCard.css";

const placeholderImg =
	"https://images.prismic.io/lichess/f54baa80-94ed-4ba1-b42b-afd818ec4b64_Horseybig.png?auto=compress,format";

function PostCard({ obj }) {
	return (
		<Card class="border-light">
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
						<a href="https://github.com/knekvasil">
							<i class="bi bi-heart"></i>
						</a>

						{obj.likes}
					</h6>
				</div>
			</Card.Body>
		</Card>
	);
}

export default PostCard;
