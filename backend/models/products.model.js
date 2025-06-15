const mongoose = require("../config/database");

const schemaProducto = new mongoose.Schema({
    referencia:{
        type: String,
        required: [true, 'la referencia es obligatoria'],
        unique: [true, "ya existe un producto creado con esta referencia"]
    },
    nombre: {
        type: String,
        required: [true, 'asignar nombre']
    },
    descripcion: {
        type: String,
        required: [true, 'descripcion obligatoria']
    },
    precio: {
        type: Number,
        default: [0, 'el precio defecto es 0'],
        min: [0, 'el precio minimo es 0'],
    },
    stock: {
        type: Number,
        default: [0, 'el stock defecto es 0'],
        min: [0, 'el stock minimo es 0'],
    },
    imagen: {
        type: String,
        required: [true, 'no existe la imagen'],
    },
    habilitado: {
        type: Boolean,
        default: true
    },

});

const producto = mongoose.model("poduct", schemaProducto);
module.exports = producto;