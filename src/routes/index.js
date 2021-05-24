const express = require("express");

const controllerProduto = require("../controller/produto");

const router = express.Router();

router.get("/produto", controllerProduto.listar);
router.post("/produto", controllerProduto.criar);
// router.delete("/produto/id", controllerProduto.deletar);
// router.put("/produto/:item", controllerProduto.alterar);

module.exports = router;
