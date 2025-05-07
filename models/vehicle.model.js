"use strict";
module.exports = {
  //short modification for pull request
  async up(queryInterface, sequelize) {
    await queryInterface.createTable("vehicule", {
      resitrationNumber: {
        type: sequelize.interger,
        primaryKey: true,

        allowNull: false,
      },
      make: {
        type: sequelize.STRING,
        allowNull: false,
      },
      model: {
        type: sequelize.STRING,
        allowNull: false,
      },
      year: {
        type: sequelize.interger,
        allowNull: false,
      },
      rentalPrice: {
        type: sequelize.interger,
        allowNull: false,
      },
    });
  },
};
