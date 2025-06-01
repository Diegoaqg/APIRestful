const exp = require('express');
const app = exp();
const mongoose = require('./backend/config/database');
const logger = require('morgan');
const modeloCliente = require('./backend/models/cliente.model')
require('dotenv').config();

app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json())
app.listen(process.env.PORT, ( )=>{
    console.log('servidor en linea');
});

app.get('/clientes', async (req,res)=>{
    let listaClientes = await modeloCliente.find();
    console.log(listaClientes)
});