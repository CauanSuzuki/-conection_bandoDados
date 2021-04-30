"use strict";

const endereco = require("../../models/endereco");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("endereco", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'cascade',
        // até aqui coluna "normal"
        references: {
          model: "usuario",
          key: "id",
        },
      
        
      },

      rua: Sequelize.STRING,
      numero: Sequelize.STRING,
      bairro: Sequelize.STRING,
      incremento: Sequelize.STRING,
      cidade: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("endereco");
  },
};
