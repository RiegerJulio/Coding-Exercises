'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      pageQuantity: 1232,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      pageQuantity: 1232,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      pageQuantity: 1232,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
