const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const ToDos = db.define('toDos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id"
    },
}, {
    timestamps: false,
});

module.exports = ToDos;