const express = require("express");

const controllerUsuario = require("../controller/usuario");
const controllerProduto = require("../controller/produto");
const controllerEndereco = require("../controller/endereco");
const controllerFornecedor = require("../controller/fornecedor");
const controllerPedido = require("../controller/pedido");

const router = express.Router();

router.get("/usuario", controllerUsuario.listar);
router.post("/usuario", controllerUsuario.criar);
router.delete("/usuario/:id", controllerUsuario.deletar);
router.put("/usuario/:item", controllerUsuario.alterar);

router.get("/produto", controllerProduto.listar);
router.post("/produto", controllerProduto.criar);
router.delete("/produto/:id", controllerProduto.deletar);
router.put("/produto/:item", controllerProduto.alterar);

router.get("/endereco", controllerEndereco.listar);
router.post("/endereco", controllerEndereco.criar);
router.delete("/endereco/:id", controllerEndereco.deletar);
router.put("/endereco/:item", controllerEndereco.alterar);

router.get("/fornecedor", controllerFornecedor.listar);
router.post("/fornecedor", controllerFornecedor.criar);
router.delete("/fornecedor/:id", controllerFornecedor.deletar);
router.put("/fornecedor/:item", controllerFornecedor.alterar);

router.get("/pedido", controllerPedido.listar);
router.post("/pedido", controllerPedido.criar);
router.delete("/pedido/:id", controllerPedido.deletar);
router.put("/pedido/:item", controllerPedido.alterar);

module.exports = router;
