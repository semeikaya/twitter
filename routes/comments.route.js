const { Router } = require('express')
const router = Router()
const { commentController } = require('../controllers/comments.controller')

// router.post('/comment', commentController.addComment)
// router.delete('/comment/:id', commentController.deleteComment)
// router.get('/comments', commentController.getComments)
// router.get('/comment/user/:id', commentController.getCommentByUserId)
// router.get('/comment/post/:id', commentController.getCommentByPostId)
// router.patch('/comment/user/:id', commentController.updateComment)

module.exports = router