const { model, Schema } = require("mongoose");

const PostSchema = Schema({
	url: { type: String, required: true, trim: true },
	comments: { type: Object, required: true },
	likes: { type: Number, required: true },
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		trim: true,
		ref: "User",
	},
});

module.exports = model("Post", PostSchema);

// User
// profileImage
// postsCreated

// comments
// userId
// text
