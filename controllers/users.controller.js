
const User = require('../models/User.model.js')

module.exports.userController = {
    addUser: async (req, res) => {
        const { firstName, } = req.body
        try {
            const user = await User.create({
                firstName,
            })
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
    addSaves: async (req, res) => {
        const user = await User.findById(req.params.id)
        try {
            if (!user.saves.includes(req.body.postId)) {
                await User.findByIdAndUpdate(req.params.id, {
                    $push: { saves: req.body.postId },
                });
                return res.json('Пост сохранен');
            } else {
                await User.findByIdAndUpdate(req.params.id, {
                    $pull: { saves: req.body.postId },
                });
                return res.json('Пост удален');
            }
        } catch (error) {
            res.json(error.message)
        }
    },
    getUsers: async (req, res) => {
        try {
            const user = await User.find().populate('saves')
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndRemove(req.params.id)
            res.json('Пользователь удален')
        } catch (error) {
            res.json(error.message)
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
    updateUser: async (req, res) => {
        const { firstName, } = req.body
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                firstName,
            })
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
}