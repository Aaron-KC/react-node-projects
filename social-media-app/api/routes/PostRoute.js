const { getAllPosts, createPost } = require('../controller/PostsController')

const router = require('express').Router()

router.get('/', getAllPosts)
router.post('/', createPost)

module.exports = router