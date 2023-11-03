const express = require("express");
const orderRoutes = require("./src/routes/orders");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: ["https://ubiquitous-jelly-924be3.netlify.app/", "http://localhost:5173", "https://gbsh2x1h-5173.brs.devtunnels.ms"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", orderRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.get("/", (req, res) => {
  res.send("Bienvenidos a mi Api Dashboard");
});

require("./src/dataBase");

app.listen(PORT, () =>
  console.log("El servidor se está escuchando en el puerto", PORT)
);
