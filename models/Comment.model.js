const mongoose = require('mongoose')
const commentSchema = mongoose.Schema({
    text: { type: String, required: true, trim: true },
    commentBy: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.SchemaTypes.ObjectId, ref: 'Post', required: true }
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment