const { model, Schema } = require("mongoose");

const CommentSchema = Schema({
	post: {
		type: Schema.Types.ObjectId,
		required: true,
		trim: true,
		ref: "Post",
	},
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		trim: true,
		ref: "User",
	},
	text: {
		type: String,
		required: true,
	},
	likes: {
		type: Number,
		required: true,
		default: 0,
	},
});

module.exports = model("Comment", CommentSchema);
