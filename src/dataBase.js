const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Estas conectado a MONGODB ATLAS"))
  .catch((error) => console.error(error));
