const ToDo = require('../models/toDos.model');

class ToDoServices {
    static async create(newToDo) {
        try {
            const toDoCreated = await ToDo.create(newToDo);
            return toDoCreated;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, updateToDoData) {
        try {
            const updateToDo = await ToDo.update(updateToDoData, {
                where: {id},
            });
            return updateToDo;
        } catch (error) {
            throw error;
        }
    }
    
    static async deleteToDo(id) {
        try {
            const deleteToDo = await ToDo.destroy({
                where: {id}
            });
            return deleteToDo
        } catch (error) {
            throw error;
        }
    }
}

module.exports= ToDoServices;