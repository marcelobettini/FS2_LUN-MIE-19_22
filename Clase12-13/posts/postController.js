const Post = require("./postModel")

//POST NEW BLOG ENTRY
const createPost = (req, res) => {
    const newPost = new Post({ ...req.body });
    newPost.save((error) => {
        if (error) {
            console.log(error);
        } else res.sendStatus(200)
    });
};

const searchTitleByText = (req, res) => {
    const { query } = req.params
    Post.find({ $text: { $search: query } }, (err, result) => {
        if (err) return res.sendStatus(404)
        if (result) return res.status(200).send(result)
    })
}

module.exports = { createPost, searchTitleByText }