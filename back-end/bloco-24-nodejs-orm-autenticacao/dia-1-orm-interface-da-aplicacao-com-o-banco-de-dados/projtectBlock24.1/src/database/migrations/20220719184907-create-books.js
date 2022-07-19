'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  async up (queryInterface, Datatypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const books = await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        primaryKey:true,
        type: Datatypes.INTEGER
      },
      title: {
        type: Datatypes.STRING
      },
      author: {
        type: Datatypes.STRING
      },
      pageQuantity: {
        type: Datatypes.STRING
      },
      
    })

    return books;
  },

  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async down (queryInterface, _Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('books')
  }
};

