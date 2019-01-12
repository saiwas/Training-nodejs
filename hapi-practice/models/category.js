'use strict';

module.exports = (sequelize, DataType) => {
    const Category = sequelize.define('category', {
        id: { type: DataType.INTEGER, autoIncrement: true, primaryKey: true},
        title: DataType.STRING,
        description: DataType.TEXT
    });

    return Category;
};
