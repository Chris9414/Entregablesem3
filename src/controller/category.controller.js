const CategoryServices = require('../services/category.services');

const createCategory = async(req,res) => {
    try {
        const newCategory = req.body;
        const category = await CategoryServices.create(newCategory);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createCategory,
}