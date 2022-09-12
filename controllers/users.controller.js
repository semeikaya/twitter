const User = require('../models/User.model.js')

module.exports.userController = {
    addUser: async (req, res) => {
        const { firstName, lastName, userName, email, password, likes, saves, comments } = req.body
        try {
            const user = await User.create({
                firstName, 
                lastName, 
                userName, 
                email, 
                password, 
                likes, 
                saves, 
                comments
            })
            res.json(user)
        } catch (error) {
                res.json(error.message)
        }
    },
    getUsers: async (req, res) => {
        try {
            const user = User.find().populate('likes saves comments')
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
}