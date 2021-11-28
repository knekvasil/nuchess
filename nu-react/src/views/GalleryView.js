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

	return <p>GalleryView</p>;
}

export default GalleryView;
