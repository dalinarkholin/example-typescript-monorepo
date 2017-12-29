'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        sub: Sequelize.STRING,
        email: Sequelize.STRING,
        username: Sequelize.STRING,
        accepted_current_terms_of_service: Sequelize.BOOLEAN,
        updated_at: Sequelize.DATE,
        created_at: Sequelize.DATE,
        deleted_at: Sequelize.DATE
      },
      {
        timestamps: true,
        paranoid: true
      }
    )
      .then(() => queryInterface.addIndex('users', [Sequelize.fn('lower', Sequelize.col('email'))], { indexName: 'email_lower_uniq_idx', indicesType: 'UNIQUE' }))
      .then(() => queryInterface.addIndex('users', [Sequelize.fn('lower', Sequelize.col('username'))], { indexName: 'username_lower_uniq_idx', indicesType: 'UNIQUE' }));
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('users')
  }
};
