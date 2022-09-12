const { Router } = require('express')
const router = Router()
const { userController } = require('../controllers/users.controller')

router.post('/user', userController.addUser)
// router.delete('/user/:id', userController.deleteUser)
// router.get('/users', userController.getUsers)
// router.get('/user/:id', userController.getUserById)
// router.get('/user/likes', userController.getUserLikes)
// router.get('/user/saves', userController.getUserSaves)
// router.patch('/user/:id', userController.updateUser)

module.exports = router