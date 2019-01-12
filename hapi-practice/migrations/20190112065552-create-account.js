'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('account', {
      id: {
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true,
        type         : Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('account');
  }
};
