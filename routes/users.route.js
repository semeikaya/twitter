const { Router } = require('express')
const router = Router()
const { userController } = require('../controllers/users.controller')

router.post('/user', userController.addUser)
router.patch('/user/saves/:id', userController.addSaves)
router.delete('/user/:id', userController.deleteUser)
router.get('/users', userController.getUsers)
router.get('/user/:id', userController.getUserById)
router.patch('/user/:id', userController.updateUser)

module.exports = router