const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: {
        type: Date,
        default: Date.now
    },
    comments: [{ body: String, date: Date }],
    meta: {
        votes: Number,
        favs: Number
    },
    hidden: Boolean,
},
    { timestamps: true }
);

PostSchema.index({ title: 'text' }) //podríamos hacer un find by title en posts/find/:query

const Post = mongoose.model("Post", PostSchema)
module.exports = Post