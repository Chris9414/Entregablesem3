const {Router} = require('express');
const User = require('../models/users.model');
const {createUser, getUserToDos} = require('../controller/user.controller');

const router = Router();

router.post('/api/v1/users', createUser);
router.get('/api/v1/users/:id', getUserToDos);

module.exports = router;