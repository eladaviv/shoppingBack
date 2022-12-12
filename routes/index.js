const { Router }  = require("express");
const orderRouter = require("./order.routes");
const productsRouter = require("./product.routes");
const router = Router();

router.use("/orders", orderRouter);
router.use("/products", productsRouter);

module.exports = router;