const { addPost, getAllPosts, getPostById, deletePost, updatePost } = require('../controller/PostController')


const router = require('express').Router()

router.post('/',addPost)
router.get('/',getAllPosts)
router.get('/:id', getPostById)
router.put('/:id', updatePost)
router.delete('/', deletePost)

module.exports = router