const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    saves: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Post' }],
})

const User = mongoose.model('User', userSchema)
module.exports = User