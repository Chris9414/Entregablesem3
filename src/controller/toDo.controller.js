const ToDoServices = require('../services/toDo.services');

const createToDo = async(req,res) => {
    try {
        const newToDo = req.body;
        const toDo = await ToDoServices.create(newToDo);
        res.status(201).json(toDo)
    } catch (error) {
        res.status(400).json(error);
    }
}


const updateToDo = async(req,res) => {
    try {
        const {id} = req.params;
        const updateToDoData = req.body;
        await ToDoServices.update(id, updateToDoData);
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteToDo = async(req,res) => {
    try {
        const {id} = req.params;
        ToDoServices.deleteToDo(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
}
module.exports = {
    createToDo,
    updateToDo,
    deleteToDo,
}

