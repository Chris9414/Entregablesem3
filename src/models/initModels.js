const Users = require('./users.model');
const ToDos = require('./toDos.model');
const Categories = require('./categories.model');

const initModels = () => {
    Users.hasMany(ToDos, {foreignKey: 'userId'})
    ToDos.belongsTo(Users, {foreignKey: 'userId'})

    Categories.hasMany(ToDos, {foreignKey: 'categoryId'})
    ToDos.belongsTo(Categories, {foreignKey: 'categoryId'})
};

module.exports = initModels;