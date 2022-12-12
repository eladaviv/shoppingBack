const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router.get("/", productsController.getAll);

router.get("/:productId", productsController.getOne);

module.exports = router;
