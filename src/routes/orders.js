const express = require("express");
const productModel = require("../models/orderModels");
const ProductServiceClass = require("./../services/orderService");
const cors = require("cors");

const router = express.Router();

const productService = new ProductServiceClass(productModel);

router.use(cors());

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.post("/orders", (req, res, next) => {
  return productService
    .createOrder(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(next);
});

router.get("/orders", (req, res, next) => {
  return productService
    .getOrders(req.query)
    .then((data) => res.json(data))
    .catch(next);
});

router.delete("/orders", (req, res, next) => {
  return productService
    .deleteOrders()
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
});
module.exports = router;
