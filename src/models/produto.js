module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    "Produto", 
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

  return Produto;
};
