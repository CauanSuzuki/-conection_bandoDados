const express = require("express");

const controllerProduto = require("../controller/produto");

const router = express.Router();

router.get("/produto", controllerProduto.listar);
router.get("/produto/:id", controllerProduto.listarUm);
router.post("/produto", controllerProduto.criar);
router.delete("/produto/:id", controllerProduto.deletar);
router.put("/produto/:item", controllerProduto.alterar);
router.delete("/produto", controllerProduto.deletarTodos);

module.exports = router;
