const express = require('express');
require('dotenv').config();
const orderRoutes = require("./routes/orders");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', orderRoutes);

require('./dataBase');

app.use(require('./routes/orders'));

app.listen(PORT, () => console.log("El servidor se esta escuchando en el puerto", PORT));

