const User = require('../models/users.model');
const ToDo = require('../models/toDos.model');
const Categories = require('../models/categories.model');

class UserServices {
    static async create(newUser) {
        try {
            const userCreated = await User.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
    }

    static async toDosWithCategory(id) {
        try {
            const result = await User.findByPk(id, {
                attributes: ["username", "email"],
                include: {
                    model: ToDo,
                    attributes: ["title", "description", "status"],
                    include: {
                        model: Categories,
                        attributes: ["name"]
                    }
                }
            })
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;