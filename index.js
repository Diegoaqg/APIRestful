const exp = require('express');// trae express
const app = exp();

const logger = require('morgan');//traen el paquete morgan
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));//procesar todas las peticiones como obj json
app.use(exp.json())//middleware

const mongoose = require('./backend/config/database');

require('dotenv').config();//importando config de la db

const modeloCliente = require('./backend/models/cliente.model')

app.get('/clientes', async (req,res)=>{
    const listaClientes = await modeloCliente.find();
    res.json(listaClientes);
});

app.post('/clientes', async (req,res)=>{
    const nuevoCliente = {
        document:req.body.document,
        nombreCompleto: req.body.nombreCompleto,
        FNAcimiento: req.body.FNAcimiento,
        correo: req.body.correo
    };
let Insercion = await modeloCliente.create(nuevoCliente);
if(Insercion)
    res.status(200).json({"mensaje":"registro exitoso"})
else
    res.status(404).json({"mensaje": "se presentó un error"})

});

app.get('/clientes/:doc', async (req,res)=>{
    let clienteEncontrado = await modeloCliente.findOne({document:req.params.doc});//buscando con la funcion findONE de mongo
    if(clienteEncontrado)
        res.status(200).json(clienteEncontrado);
    else
        res.status(404).json({"error":"cliente no encontrado"});

});

app.put('/clientes/:doc', async (req,res)=>{
    const clienteEditado = {
        document:req.params.doc,
        nombreCompleto: req.body.nombreCompleto,
        FNAcimiento: req.body.FNAcimiento,
        correo: req.body.correo
    };
let Actualizacion = await modeloCliente.findOneAndUpdate({document:req.params.doc},clienteEditado);
if(Actualizacion)
    res.status(200).json({"mensaje": "actualizacion con exito"})
else
    res.status(404).json({"mensaje":"se presento un error"})
});

app.delete('/clientes/:doc', async (req,res)=>{
    console.log("documento recibido:", req.params.doc);
    let eliminacion = await modeloCliente.findOneAndDelete({document:req.params.doc});
    if(eliminacion)
        res.status(200).json({"mensaje": "eliminacion exitosa"})
    else   
        res.status(404).json({"mensaje": "se presento un error"})
});


let modeloProducto = require('./backend/models/products.model')//importando models

app.get('/products', async (req,res)=>{
    let listadoProductos = await modeloProducto.find();
    if(listadoProductos)
    res.status(200).json(listadoProductos);
    else
        res.status(404).json({error: "no se encontraron productos"});

});

app.get('/products/:ref', async (req,res)=>{
    let productoEncontrado = await modeloProducto.findOne({referencia:req.params.ref});//buscando con la funcion findONE de mongo
    if(productoEncontrado)
        res.status(200).json(productoEncontrado);
    else
        res.status(404).json({"error":"producto no encontrado"});

});

app.post('/products', async (req,res)=>{
        const nuevoProducto = {
            referencia: req.body.referenciaProducto,
            nombre: req.body.nombreProducto,
            descripcion: req.body.descripcionProducto,
            precio: req.body.precioProducto,
            stock: req.body.stockProducto,
            imagen: req.body.imagenProducto,
            habilitado: true,
        };

    let Insercion = await modeloProducto.create(nuevoProducto);
    if(Insercion)
        res.status(200).json({"mensaje":"registro exitoso"})
    else
    res.status(404).json({"mensaje": "se presentó un error"})
});

app.put('/products/:ref', async (req,res)=>{
    const productoEditado = {
        referencia: req.params.ref,
        nombre: req.body.nombreProducto,
        descripcion: req.body.descripcionProducto,
        precio: req.body.precioProducto,
        stock: req.body.stockProducto,
        imagen: req.body.imagenProducto,
        habilitado: true,
    };
let Actualizacion = await modeloProducto.findOneAndUpdate({referencia:req.params.ref},productoEditado);
if(Actualizacion)
    res.status(200).json({"mensaje": "actualizacion con exito"})
else
    res.status(404).json({"mensaje":"se presento un error"})
});

app.delete('/products/:ref', async (req,res)=>{
    console.log("Referencia recibida:", req.params.ref);
    let eliminacion = await modeloProducto.findOneAndDelete({referencia:req.params.ref});
    if(eliminacion)
        res.status(200).json({"mensaje": "eliminacion exitosa"})
    else   
        res.status(404).json({"mensaje": "se presento un error"})
});

app.listen(process.env.PORT, ()=>{
    console.log('servidor en linea');//puerto dond recibira peticiones en variable de entorno
});






