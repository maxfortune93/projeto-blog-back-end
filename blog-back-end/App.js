const express = require('express');
const app = express();
const consign = require('consign');
const database = require('./config/database');

app.database = database;

consign()
    .then('config/middlewares.js')
    .then('./helpers/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(4000, () =>{
    console.log('😃 Projeto blog esta em andamento ...Porta 4000')
});