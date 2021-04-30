module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define(
    "Endereco", //nome dado a tabela
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      rua: DataTypes.STRING,
      numero: DataTypes.STRING,
      bairro: DataTypes.STRING,
      incremento: DataTypes.STRING,
      cidade: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "endereco",
    }
  );
  Endereco.associate = (models) => {
    Endereco.belongsTo(models.Usuario, {
      foreignKey: "usuarioId",
      as: "usuario",
    });
  };
  return Endereco;
};
