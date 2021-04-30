module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define(
      "Pedido", //nome dado a tabela
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        valorTotal: DataTypes.DECIMAL,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        tableName: "pedido",
      }
    );
    Pedido.associate = (models) => {
      Pedido.belongsTo(models.Usuario, {
        foreignKey: "usuarioId",
        as: "usuario",
      });
    };
    return Pedido;
  };