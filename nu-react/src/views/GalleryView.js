// GalleryView.js

import { useEffect, useState } from "react";
import { ButtonToolbar, Spinner } from "react-bootstrap";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../services/postService";

import "./GalleryView.css";

function GalleryView() {
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getPost();
	}, []);

	async function getPost() {
		setLoading(true);
		setTimeout(async () => {
			const response = await getAllPosts();
			setPosts(response.data);
			setLoading(false);
		}, 2000);
	}

	return (
		<div className="container mt-5">
			<div className="container-gallery">
				{loading && (
					<div
						style={{
							textAlign: "center",
							marginTop: 20,
							height: "88.1vh",
							paddingTop: "300px",
						}}
					>
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
				{posts === null && <h2>No Posts Results</h2>}
				<div className="row postCards">
					{posts.map((post) => (
						<div
							key={post._id}
							className="cardBox col-lg-3 col-md-4 col-sm-6 col-xs-12"
						>
							<PostCard obj={post} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default GalleryView;
