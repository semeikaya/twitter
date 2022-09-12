const Post = require('../models/Post.model.js')

module.exports.postController = {
    addPost: async (req, res) => {
        const { text, postedBy, comments, likes, } = req.body
        try {
            const post = await Post.create({
                text,
                postedBy,
                comments,
                likes,
            })
            res.json(post)
        } catch (error) {
            res.json(error.message)
        }
    },
    getPost: async (req, res) => {
        try {
            const post = Post.find().populate('comments likes')
            res.json(post)
        } catch (error) {
            res.json(error.message)
        }
    },
}