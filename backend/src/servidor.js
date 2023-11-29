require('dotenv').config();

const express = require('express')


const conectarMongo = require('./config/MongooseConfig.js');

const app = express()
const PUERTO = 3000;


app.get('/', function (req, res) {
  res.send('Hola Mundo');
})

app.listen(PUERTO, ()=> { 
  console.log(`Servidor conectado Corectamente ${PUERTO}`);
  conectarMongo();
} )