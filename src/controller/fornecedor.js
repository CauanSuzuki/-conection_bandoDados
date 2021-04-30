const models = require("../models");

const tabelaFornecedor = models.Fornecedor;

exports.listar = async (req, res) => {
  const fornecedor = await tabelaFornecedor.findAll({
    include: "produtos",
  });
  return res.json(fornecedor);
};

exports.criar = async (req, res) => {
  const fornecedor = await tabelaFornecedor.create(req.body);

  return res.json(fornecedor);
};

exports.deletar = async (req, res) => {
  const variavel = await tabelaFornecedor.findAll({
    where: {
      id: req.params.id,
    },
  });
  console.log(variavel.length);
  if (variavel.length !== 0) {
    const fornecedor = await tabelaFornecedor.destroy({
      where: { id: req.params.id },
    });
    return res.json({ mensage: "Deletado" });
  } else {
    return res.json({ Mensage: "Comando inválido" });
  }
};

exports.alterar = async (req, res) => {
  const variavel = await tabelaFornecedor.findAll({
    where: {
      id: req.params.item,
    },
  });
  if (variavel.length !== 0) {
    const fornecedor = await tabelaFornecedor.update(
      {
        nome: req.body.nome,
        cnpj: req.body.cnpj,
        categoria: req.body.categoria,
      },
      {
        where: {
          id: req.params.item,
        },
      }
    );
    return res.json({ message: "alterado" });
  } else {
    return res.json({ mensage: "comando inválidos" });
  }
};
