module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    "Produto", //modo como vou acesar no relacionamentos
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: DataTypes.STRING,
      modelo: DataTypes.STRING,
      preco: DataTypes.REAL,
      quantidade: DataTypes.INTEGER,
    },
    {
      tableName: "produto",
    }
  );

  Produto.associate = (models) => {
    console.log(models);
    Produto.belongsTo(models.Fornecedor, {
      foreignKey: "fornecedorId",
      as: "fornecedor",
    });
  };

  return Produto;
};
