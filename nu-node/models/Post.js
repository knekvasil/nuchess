const { model, Schema } = require("mongoose");

const PostSchema = Schema({
	url: { type: String, required: true, trim: true },
	likes: { type: Number, required: true, default: 0 },
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		trim: true,
		ref: "User",
	},
});

module.exports = model("Post", PostSchema);
