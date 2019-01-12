'use strict';

module.exports = (sequelize, DataType) => {
    const MenuItem = sequelize.define('menu_item', {
        id: { type: DataType.INTEGER, autoIncrement: true, primaryKey: true},
        category_id: DataType.INTEGER,
        title: DataType.STRING,
        description: DataType.TEXT,
        price: DataType.DOUBLE
    });

    return MenuItem;
};