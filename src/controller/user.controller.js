const UserServices = require('../services/user.services');

const createUser = async(req,res) => {
    try {
        const newUser = req.body;
        const user = await UserServices.create(newUser);
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json(error);
    }
}

const getUserToDos = async(req,res) => {
    try {
        const {id} = req.params
        const toDosWithCategory = await UserServices.toDosWithCategory(id);
        res.json(toDosWithCategory)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createUser,
    getUserToDos,
}