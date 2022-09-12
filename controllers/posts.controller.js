const Post = require('../models/Post.model.js')

module.exports.postController = {
    addPost: async (req, res) => {
        const { text, postedBy, } = req.body
        try {
            const post = await Post.create({
                text,
                postedBy,
            })
            res.json(post)
        } catch (error) {
            res.json(error.message)
        }
    },
    addLikes: async (req, res) => {
        const post = await Post.findById(req.params.id)
        try {
            if (!post.likes.includes(req.body.userId)) {
                await Post.findByIdAndUpdate(req.params.id, {
                    $push: { likes: req.body.userId },
                });
                return res.json("Мне нравится");
            } else {
                await Post.findByIdAndUpdate(req.params.id, {
                    $pull: { likes: req.body.userId },
                });
                res.json("Мне не нравится");
            }
        } catch (error) {
            res.json(error.message)
        }
    },
    getPosts: async (req, res) => {
        try {
            const post = await Post.find().populate('postedBy likes')
            res.json(post)
        } catch (error) {
            res.json(error.message)
        }
    },
    deletePost: async (req, res) => {
        try {
            await Post.findByIdAndRemove(req.params.id)
            res.json('Пост удален')
        } catch (error) {
            res.json(error.message)
        }
    },
    updatePost: async (req, res) => {
        const { text, postedBy } = req.body
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, { text, postedBy })
            res.json(post)
        } catch (error) {
            res.json(error.message)
        }
    },
    getPostByUserId: async (req, res) => {
        try {
            const post = await Post.find({ postedBy: req.params.id }).populate('postedBy likes')
            res.json(post)
        } catch (error) {
            res.json(error.message)
        }
    },
    getPostById: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id).populate('postedBy likes')
            res.json(post)
        } catch (error) {
            res.json(error.message)
        }
    },
}