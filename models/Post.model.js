const mongoose = require('mongoose')
const postsSchema = mongoose.Schema({
    text: { type: String, required: true, trim: true },
    postedBy: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
    likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
})

const Post = mongoose.model('Post', postsSchema)
module.exports = Post