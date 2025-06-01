const mongoose = require('../config/database');
const schemaCliente = new mongoose.Schema({

    document:{
        type: String,
        minLength: [7, "El documento no tiene el tamaño minimo"],
        maxLength:[10, "el numero del documento excede el numero maximo"],
        require: [true, "Por favor digite su documento de identidad"],
    },

    nombreCompleto:{
        type: String,
        minLength:3,
        maxLength: 150
    },
    FNAcimiento:{
        type: Date,
        max: Date.now
    }
});

const cliente = mongoose.model("clientes",schemaCliente);
module.exports = cliente;