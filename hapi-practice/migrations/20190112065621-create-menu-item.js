'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('menu_item', {
      id: {
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true,
        type         : Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.DOUBLE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('menu_item');
  }
};
