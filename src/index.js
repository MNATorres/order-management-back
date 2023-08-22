const express = require('express');

const app = express()

require('./dataBase');

app.use(require('./routes/index.routes'));

app.listen(3000);
console.log("el servidor está escuchando en el puerto 3000")