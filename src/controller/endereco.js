const models = require("../models");

const tabelaEndereco = models.Endereco;

exports.listar = async (req, res) => {
  const endereco = await tabelaEndereco.findAll(
    {  include: "usuario",
  }
  );
  return res.json(endereco);
};

exports.criar = async (req, res) => {
  const endereco = await tabelaEndereco.create(req.body);
  return res.json(endereco);
};

exports.deletar = async (req, res) => {
  const variavelEndereco = await tabelaEndereco.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (variavelEndereco.length !== 0) {
    const endereco = await tabelaEndereco.destroy({
      where: { id: req.params.id },
    });
    return res.json({ mensage: "Deletado" });
  } else {
    return res.json({ mensage: "Comando inválido" });
  }
};

exports.alterar = async (req, res) => {
  const variavelEndereco = await tabelaEndereco.findAll({
    where: {
      id: req.params.item,
    },
  });
  if (variavelEndereco.length !== 0) {
    const endereco = await tabelaEndereco.update(
      {
        rua: req.body.nome,
        numero: req.body.nome,
        bairro: req.body.nome,
        incremento: req.body.nome,
        cidade: req.body.nome,
      },
      {
        where: { id: req.params.id },
      }
    );
    return res.json({ mensage: "Alterado com sucesso" });
  } else res.json({ mensage: "Comando inváçido" });
};
