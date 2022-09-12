const Comment = require('../models/Comment.model.js')

module.exports.postController = {
    addComment: async (req, res) => {
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
    getComment: async (req, res) => {
        try {
            const post = Comment.find().populate('comments likes')
            res.json(post)
        } catch (error) {
            res.json(error.message)
        }
    },
}