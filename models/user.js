"use strict";
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: sequelize.interger,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: sequelize.STRING,
        allowNull: false,
      },
      tel: {
        type: sequelize.interger,
        allowNull: false,
      },
      otp: {
        type: sequelize.interger,
        allowNull: false,
      },
      otpExpiration: {
        type: sequelize.DATE,
        allowNull: false,
      },
      isVerified: {
        type: sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    });
  },
};
