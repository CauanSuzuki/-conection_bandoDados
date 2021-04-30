const models = require("../models");

const tabelaPedido = models.Pedido;

exports.listar = async (req, res) => {
  const pedido = await tabelaPedido.findAll({ include: "usuario" });
  return res.json(pedido);
};

exports.criar = async (req, res) => {
  const pedido = await tabelaPedido.create(req.body);
  return res.json(pedido);
};

exports.deletar = async (req, res) => {
  const variavelPedido = await tabelaPedido.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (variavelPedido.length !== 0) {
    const pedido = await tabelaPedido.destroy({
      where: { id: req.params.id },
    });
    return res.json({ mensage: "Deletado" });
  } else {
    return res.json({ mensage: "Comando inválido" });
  }
};

exports.alterar = async (req, res) => {
  const variavelPedido = await tabelaPedido.findAll({
    where: {
      id: req.params.item,
    },
  });
  if (variavelPedido.length !== 0) {
    const pedido = await tabelaPedido.update(
      {
        valorTotal: req.body.valorTotal,
      },
      {
        where: { id: req.params.id },
      }
    );
    return res.json({ mensage: "Alterado com sucesso" });
  } else res.json({ mensage: "Comando inváçido" });
};
