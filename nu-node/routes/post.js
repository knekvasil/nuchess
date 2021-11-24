const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.get("/", async (req, res) => {
	const posts = await Post.find().populate("user");
	try {
		if (posts.length === 0) {
			return res.status(400).json({ message: "Posts not found" });
		}
		return res.status(200).json(posts);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't retrieve posts" });
	}
});

router.get("/post/:id", async (req, res) => {
	const { id } = req.params;
	const post = await Post.findById(id);
	try {
		return res.status(200).json(post);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't get the post" });
	}
});

router.post("/post", async (req, res) => {
	const postToCreate = await Post.create(req.body);
	try {
		return res.status(201).json(postToCreate);
	} catch (error) {
		return res.status(500).json({ messasge: "Couldn't create the post" });
	}
});

router.put("/post/:id", async (req, res) => {
	const { id } = req.params;
	const postToUpdate = await Post.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	try {
		return res.status(202).json(postToUpdate);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't update the post" });
	}
});

router.delete("/post/:id", async (req, res) => {
	const { id } = req.params;
	await Post.findByIdAndDelete(id);
	try {
		return res.status(203).json({ message: "Deleted sucessfully" });
	} catch (error) {
		return res.status(500).json({ message: "Couldn't delete the post" });
	}
});

module.exports = router;
