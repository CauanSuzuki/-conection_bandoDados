"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("produto", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      fornecedorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "fornecedor",
          key: "id",
        },
      },

      nome: Sequelize.STRING,
      modelo: Sequelize.STRING,
      preco: Sequelize.REAL,
      quantidade: Sequelize.BIGINT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("produto");
  },
};
