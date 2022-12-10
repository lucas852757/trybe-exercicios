'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('UserBooks', {
      userId: {
        type: Sequelize.STRING,
        field: 'user_id',
        // references: {
        //   model: 'Users',
        //   key: 'user_id',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
        primaryKey: true
      },
      bookId: {
        type: Sequelize.STRING,
        field: 'book_id',
        // references: {
        //   model: 'Books',
        //   key: 'book_id',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
        primaryKey: true
      }
    });
  },

  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('UserBooks');
  }
};
