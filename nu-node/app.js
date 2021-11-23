// app.js

const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

app = express();

require("dotenv").config(); // to start our .env package

// db connection
mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log("Connected to DB..."))
	.catch(() => console.log("Couldn't connect to DB..."));

// middleware connection
app.use(express.json());
app.use(cors());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
		createParentPath: true,
	})
);

app.use("/api/v1/post", require("./routes/post"));
app.use("/api/v1/user", require("./routes/user"));
app.use("/api/v1/auth", require("./routes/auth"));

// port setup & listen to clients
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running...⚡"));
