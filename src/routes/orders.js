const express = require("express");
const productModel = require("../models/orderModels");
const ProductServiceClass = require("./../services/orderService");
const cors = require("cors");

const router = express.Router();

const productService = new ProductServiceClass(productModel);

router.use(cors());

// Endpoint de prueba
router.get("/", (req, res) => {
  res.send("Hello world");
});

// Crear pedido
router.post("/orders", (req, res, next) => {
  productModel
    .create(req.body)
    .then((data) => {
      console.log("Se ha creado un pedido:", data);
      res.status(201).json(data); // 201 Created
    })
    .catch(next);
});

// Leer pedidos
router.get("/orders", (req, res, next) => {
  return productService
    .getOrders(req.query)
    .then((data) => res.json(data))
    .catch(next);
});

// Eliminar todos los pedidos
router.delete("/orders", (req, res, next) => {
  productModel
    .deleteMany({})
    .then(() => {
      res.status(204).send(); // 204 No Content
    })
    .catch(next);
});

module.exports = router;
