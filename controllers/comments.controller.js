const Comment = require('../models/Comment.model.js')

module.exports.commentController = {
    addComment: async (req, res) => {
        const { text, commentBy, post } = req.body
        try {
            await Comment.create({
                text,
                commentBy,
                post,
            })
            res.json('Комментарий добавлен')
        } catch (error) {
            res.json(error.message)
        }
    },
    getComments: async (req, res) => {
        try {
            const comment = await Comment.find().populate('commentBy post')
            res.json(comment)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteComment: async (req, res) => {
        try {
            await Comment.findByIdAndRemove(req.params.id)
            res.json('Комментарий удален')
        } catch (error) {
            res.json(error.message)
        }
    }
}