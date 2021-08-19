const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {countBooks, getAllBooks, getBook, getBooks, deleteBook, updateBook} = require('./book.controller')
const router = express.Router()

// router.use(requireAuth)
console.log('01 in Book routes');

router.get('/', getAllBooks)
// router.get('/:id', getBook)
// router.get('/filter', getBooks)
router.get('/count', countBooks)

router.put('/update', updateBook)
// router.put('/:id', updateBook)


// router.delete('/:id', deleteBook)

module.exports = router