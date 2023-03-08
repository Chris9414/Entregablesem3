const {Router} = require('express');
const Post = require('../models/toDos.model');
const {createToDo, updateToDo, deleteToDo} = require('../controller/toDo.controller');

const router = Router();

router.post('/api/v1/toDos', createToDo);
router.put('/api/v1/toDos/:id', updateToDo);
router.delete('/api/v1/toDos/:id', deleteToDo);

module.exports = router;

