const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {countUsers, getAllUsers, getUser, getUsers, deleteUser, updateUser,updateUser2} = require('./user.controller')
const router = express.Router()

// router.use(requireAuth)
console.log('01 in user routes');

router.get('/', getAllUsers)
router.get('/:filter', getUsers)
router.get('/id/:id', getUser)
router.get('/count', countUsers)

router.put('/update2', updateUser2)
router.put('/:id', requireAuth , updateUser)


router.delete('/:id', requireAdmin, deleteUser)

module.exports = router