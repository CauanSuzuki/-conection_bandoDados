const models = require("../models");
const produto = require("../models/produto");

const tabelaProduto = models.Produto;

exports.listar = async (req, res) => {
  const produtos = await tabelaProduto.findAll({ order: [["id", "ASC"]] });

  return res.json(produtos);
};

exports.listarUm = async (req, res) => {
  const produto = await tabelaProduto.findByPk(req.params.id);

  return res.json(produto);
};

exports.criar = async (req, res) => {
  const produto = await tabelaProduto.create(req.body);

  return res.json(produto);
};

exports.deletar = async (req, res) => {
  const variavel = await tabelaProduto.findAll({
    where: {
      id: Number(req.params.id),
    },
  });
  console.log(variavel.length);
  if (variavel.length !== 0) {
    const produto = await tabelaProduto.destroy({
      where: { id: Number(req.params.id) },
    });
    return res.json({ mensage: "Deletado" });
  } else {
    return res.json({ Mensage: "Comando inválido" });
  }
};

exports.deletarTodos = async (req, res) => {
  const variavel = await tabelaProduto.findAll();
  console.log(variavel.length);
  if (variavel.length !== 0) {
    const produto = await tabelaProduto.destroy({
      where: {},
    });
    return res.json({ mensage: "Deletado" });
  } else {
    return res.json({ Mensage: "Comando inválido" });
  }
};

exports.deletarSelecionados = async (req, res) => {
  const id = req.params.id;
  const deletar = await tabelaProduto.destroy({
    where: {
      id: Number(id),
    },
  });
  return res.json({ mensage: "Deletado" });
};

exports.alterar = async (req, res) => {
  const variavel = await tabelaProduto.findAll({
    where: {
      id: Number(req.params.item),
    },
  });
  if (variavel.length !== 0) {
    const produto = await tabelaProduto.update(
      {
        nome: req.body.nome,
        modelo: req.body.modelo,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
      },
      {
        where: { id: Number(req.params.item) },
      }
    );
    console.log(req.body);
    return res.json({ mensage: "Alterado com suscesso" });
  } else {
    return res.json({ mensage: "Comando inválido" });
  }
};
