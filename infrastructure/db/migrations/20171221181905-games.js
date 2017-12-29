'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'games',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        author: Sequelize.STRING,
        genre: Sequelize.STRING,
        download_url: Sequelize.STRING,
        status: Sequelize.STRING,
        updated_at: Sequelize.DATE,
        created_at: Sequelize.DATE,
        deleted_at: Sequelize.DATE
      },
      {
        timestamps: true,
        paranoid: true
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('games');
  }
};
