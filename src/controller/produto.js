const models = require("../models");

const tabelaProduto = models.Produto;

exports.listar = async (req, res) => {
  const produtos = await tabelaProduto.findAll();

  return res.json(produtos);
};

exports.criar = async (req, res) => {
  const produto = await tabelaProduto.create(req.body);

  return res.json(produto);
};

exports.deletar = async (req, res) => {
  const variavel = await tabelaProduto.findAll({
    where: {
      id: req.params.id,
    },
  });
  console.log(variavel.length);
  if (variavel.length !== 0) {
    const produto = await tabelaProduto.destroy({
      where: { id: req.params.id },
    });
    return res.json({ mensage: "Deletado" });
  } else {
    return res.json({ Mensage: "Comando inválido" });
  }
};

// exports.alterar = async (req, res) => {
//   const variavel = await tabelaProduto.findAll({
//     where: {
//       id: req.params.item,
//     },
//   });
//   if (variavel.length !== 0) {
//     const produto = await tabelaProduto.update(
//       {
//         nome: req.body.nome,
//         modelo: req.body.modelo,
//         preco: req.body.preco,
//         quantidade: req.body.quantidade,
//       },
//       {
//         where: { id: req.params.item },
//       }
//     );
//     return res.json({ mensage: "Alterado com suscesso" });
//   } else {
//     return res.json({ mensage: "Comando inválido" });
//   }
// };
