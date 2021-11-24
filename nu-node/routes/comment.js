const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment");

router.get("/", async (req, res) => {
	// HERE
	const comments = await Comment.find().populate("user").populate("post");
	try {
		if (comments.length === 0) {
			return res.status(400).json({ message: "comments not found" });
		}
		return res.status(200).json(comments);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't retrieve comments" });
	}
});

router.get("/comment/:id", async (req, res) => {
	const { id } = req.params;
	const comment = await Comment.findById(id).populate("user").populate("post");
	try {
		return res.status(200).json(comment);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't get the comment" });
	}
});

router.post("/comment", async (req, res) => {
	const commentToCreate = await Comment.create(req.body);
	try {
		return res.status(201).json(commentToCreate);
	} catch (error) {
		return res.status(500).json({ messasge: "Couldn't create the comment" });
	}
});

router.put("/comment/:id", async (req, res) => {
	const { id } = req.params;
	const commentToUpdate = await Comment.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	try {
		return res.status(202).json(commentToUpdate);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't update the comment" });
	}
});

router.delete("/comment/:id", async (req, res) => {
	const { id } = req.params;
	await Comment.findByIdAndDelete(id);
	try {
		return res.status(203).json({ message: "Deleted sucessfully" });
	} catch (error) {
		return res.status(500).json({ message: "Couldn't delete the comment" });
	}
});

module.exports = router;
