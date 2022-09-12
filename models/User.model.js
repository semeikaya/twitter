const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }],
    saves: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }],
    comments: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Comment' }]
})

const User = mongoose.model('User', userSchema)
module.exports = User