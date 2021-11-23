const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");
const { generateJwt } = require("../helpers/generateJwt");

router.post("/signup", async (req, res) => {
	const { email } = req.body;
	const testEmail = await User.findOne({ email });
	if (testEmail) {
		return res
			.status(500)
			.json({ message: "Coudn't signup, please try again" });
	}
	const user = new User(req.body);
	try {
		const salt = bcrypt.genSaltSync();
		user.password = bcrypt.hashSync(req.body.password, salt);
		user.save();
		return res.status(201).json(user);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't create the user" });
	}
});

router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		return res.status(500).json({ message: "Please check credentials" });
	}
	const validPassword = bcrypt.compareSync(password, user.password);
	if (!validPassword) {
		return res.status(500).json({ message: "Please check credentials" });
	}
	return res.status(200).json(user);
});

module.exports = router;
