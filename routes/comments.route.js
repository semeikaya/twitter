const { Router } = require('express')
const router = Router()
const { commentController } = require('../controllers/comments.controller')

router.post('/comment', commentController.addComment)
router.delete('/comment/:id', commentController.deleteComment)
router.get('/comments', commentController.getComments)


module.exports = router