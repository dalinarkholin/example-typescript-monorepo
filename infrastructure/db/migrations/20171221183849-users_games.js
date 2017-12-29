'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users_games',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "users", key: "id" },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
        },
        game_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "games", key: "id" },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
        },
        updated_at: Sequelize.DATE,
        created_at: Sequelize.DATE,
        deleted_at: Sequelize.DATE
      },
      {
        timestamps: true,
        paranoid: true
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('users_games');
  }
};
