const {Router} = require('express');
const {createCategory} = require('../controller/category.controller');

const router = Router();

router.post('/api/v1/categories', createCategory);

module.exports = router;