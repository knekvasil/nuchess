const { model, Schema } = require("mongoose");

const CommentSchema = Schema({
	postId: {
		type: Schema.Types.ObjectId,
		required: true,
		trim: true,
		ref: "Post",
	},
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		trim: true,
		ref: "User",
	},
	text: {
		type: String,
		required: true,
	},
	upvotes: {
		type: Number,
		required: true,
		default: 0,
	},
	downvotes: {
		type: Number,
		required: true,
		default: 0,
	},
});

module.exports = model("Comment", CommentSchema);

// comments
// userId
// text
