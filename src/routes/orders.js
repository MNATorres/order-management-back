const express = require("express");
const productModel = require("../models/orderModels");
const cors = require('cors');

const app = express();
app.use(cors());

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello world");
})

//create order
router.post("/orders", (req, res) => {
  productModel
    .create(req.body)
    .then((data) => res.json(data))
    .then(() => console.log("Se ha creado un producto"))
    .catch((error) => res.json({ message: error }));
});

//read order
router.get("/orders", (req, res) => {
  productModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete orders
router.delete("/orders", (req, res) => {
    productModel.deleteMany({})
      .then((data) => res.json({ message: "Todos los productos han sido eliminados." }))
      .catch((error) => res.json({ message: error }));
  });



module.exports = router;
