'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Categories', [{
      category: 'vechicle',
      subCategories: 'car',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'vechicle',
      subCategories: 'bike',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'devices',
      subCategories: 'mobile',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      category: 'devices',
      subCategories: 'earphone',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'furniture',
      subCategories: 'table',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'furniture',
      subCategories: 'bed',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'property',
      subCategories: 'house',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'property',
      subCategories: 'empty-land',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
