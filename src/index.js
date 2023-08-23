const express = require("express");
const orderRoutes = require("./routes/orders");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", orderRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

require("./dataBase");

app.listen(PORT, () =>
  console.log("El servidor se está escuchando en el puerto", PORT)
);
