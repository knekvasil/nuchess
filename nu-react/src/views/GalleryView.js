// GalleryView.js

import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../services/postService";

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

	function handleSearch(event) {
		setSearch(event.target.value.toLowerCase);
	}

	function resetPosts() {
		getPost();
		setSearch("");
	}

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-6 col-sm-6">
					<h2>Home View</h2>
				</div>
				<div className="col-md-3 col-sm-6 mb-3">
					<input
						className="form-control"
						onChange={handleSearch}
						style={{ display: "flex", alignSelf: "flex-end" }}
						type="text"
						placeholder="Search"
					/>
				</div>
				<div className="col-md-3 col-sm-6">
					<button onClick={resetPosts} className="btn btn-outline-dark">
						reset
					</button>
				</div>
			</div>
			<div className="container">
				{loading && (
					<div style={{ textAlign: "center", marginTop: 20 }}>
						<Spinner
							style={{ height: 80, width: 80, fontWeight: "bold" }}
							animation="border"
						/>
						<h4>Loading...</h4>
					</div>
				)}
				{posts === null && <h2>No Posts Results</h2>}
				<div className="row postCards">
					{/* We are filtering at the same time we are maping that way we get in-time search results */}
					{posts
						.filter((post) =>
							search ? post.name.toLowerCase().includes(search) : post
						)
						.map((post) => (
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
