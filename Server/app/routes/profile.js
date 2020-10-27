const express = require('express')
const router = express.Router()

const profilesController = require('../controllers/profile');

router.get('/', profilesController.getAll)

router.get('/:id', profilesController.getById)

router.post('/', profilesController.createNew)

router.put('/:id', profilesController.updateProfileById)

router.delete('/:id', profilesController.deleteProfile)

module.exports = router