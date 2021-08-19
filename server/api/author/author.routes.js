const express = require('express')
const { getAllAuthors, countAuthors,updateAuthor } = require('./author.controller')
const router = express.Router()

// router.use(requireAuth)
console.log('01 in Author routes');

router.get('/', getAllAuthors)
router.get('/count', countAuthors)

router.put('/update', updateAuthor)


module.exports = router