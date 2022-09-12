const { Router } = require('express')
const router = Router()
const { postController } = require('../controllers/posts.controller')

router.post('/post', postController.addPost)
// router.delete('/post/:id', postController.deletePost)
// router.get('/posts', postController.getPosts)
// router.get('/post/:id', postController.getPostById)
// router.get('/post/user/:id', postController.getPostByUserId)
// router.patch('/post/user/:id', postController.updatePost)
// router.get('/post/likes', userController.getPostLikes)

module.exports = router