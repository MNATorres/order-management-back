const express = require("express");
const orderRoutes = require("./src/routes/orders");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", orderRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

require("./src/dataBase");

app.listen(PORT, () =>
  console.log("El servidor se está escuchando en el puerto", PORT)
);
