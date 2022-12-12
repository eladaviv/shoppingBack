const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders.controller");

router.get("/", ordersController.getAll);

router.post("/", ordersController.createOrder);

module.exports = router;
