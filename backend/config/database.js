const mongoose = require('mongoose');//librerias mongo
require('dotenv').config();//variables de entorno

const URI =`mongodb+srv://${process.env.USER_MDB}:${process.env.PASS_MDB}@diego.mlvih.mongodb.net/${process.env.NAME_MDB}`;//donde estara la db

mongoose.connect(URI)//conexion

.then(() => console.log('conexion exitosa en mongodb'))
.catch(err => console.error('error al conectar en mongo db:',err));//condicionales para conocer el estado de la conexion

module.exports = mongoose;//expotamos el objeto de la conexion