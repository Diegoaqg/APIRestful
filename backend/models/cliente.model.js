const mongoose = require('../config/database'); //importacion de objeto de la base de datos exportada

const schemaCliente = new mongoose.Schema({ //info dela base de datos con "Schema"

    document:{
        type: String,
        minLength: [7, "El documento no tiene el tamaño minimo"],//entre "" mensaje en caso de error
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
    },
    correo:{
        type: String,
        min:3,
        max: 150
    }
});

const cliente = mongoose.model("clientes",schemaCliente);
module.exports = cliente;//exportar modulo