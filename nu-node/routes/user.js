const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

const User = require("../models/User");

router.get("/user/:id", async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id);
	try {
		return res.status(200).json(user);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't get the user" });
	}
});

router.post("/user/imageUpload/:id", async (req, res) => {
	const { id } = req.params;
	const userToUpdate = await User.findById(id);

	//check for pre-exisiting images
	if (userToUpdate.image) {
		let array = userToUpdate.image.split("/");
		let fileName = array[array.length - 1];
		const [public_id] = fileName.split(".");
		await cloudinary.uploader.destroy(public_id);
	}

	const { tempFilePath } = req.files.image;
	const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
	userToUpdate.image = secure_url;
	await userToUpdate.save();
	try {
		return res.status(201).json(userToUpdate);
	} catch (error) {
		return res
			.status(500)
			.json({ message: "There was an error uploading the image" });
	}
});

router.post("/user", async (req, res) => {
	const userToCreate = await User.create(req.body);
	try {
		return res.status(201).json(userToCreate);
	} catch (error) {
		return res.status(500).json({ messasge: "Couldn't create the user" });
	}
});

router.put("/user/:id", async (req, res) => {
	const { id } = req.params;
	const userToUpdate = await User.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	try {
		return res.status(202).json(userToUpdate);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't update the user" });
	}
});

router.delete("/user/:id", async (req, res) => {
	const { id } = req.params;
	await User.findByIdAndDelete(id);
	try {
		return res.status(203).json({ message: "Deleted sucessfully" });
	} catch (error) {
		return res.status(500).json({ message: "Couldn't delete the user" });
	}
});

module.exports = router;
