const express = require('express')
const {getAllTasks} = require('./task.controller')
const router = express.Router()

console.log('In task route');

router.get('/', getAllTasks)
// router.get('/:id', getBook)
// router.get('/filter', getBooks)
// router.get('/count', countBooks)

// router.put('/update', updateBook)
// router.put('/:id', updateBook)


// router.delete('/:id', deleteBook)

module.exports = router