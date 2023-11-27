
const express = require('express')
const app = express()

const PUERTO = 3000;


app.get('/', function (req, res) {
  res.send('Hola Mundo')
  
})
console.log(`Servidor conectado Corectamente ${PUERTO}`);
app.listen(PUERTO)