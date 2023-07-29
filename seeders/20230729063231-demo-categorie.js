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
      subcategories: 'car',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'vechicle',
      subcategories: 'car',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'devices',
      subcategories: 'mobile',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      category: 'devices',
      subcategories: 'earphone',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'furniture',
      subcategories: 'table',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'furniture',
      subcategories: 'bed',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'property',
      subcategories: 'house',
      image: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'property',
      subcategories: 'empty-land',
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
