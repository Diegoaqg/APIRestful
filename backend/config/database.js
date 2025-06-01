const mongoose = require('mongoose');
require('dotenv').config();
const URI =`mongodb+srv://${process.env.USER_MDB}:${process.env.PASS_MDB}@diego.mlvih.mongodb.net/${process.env.NAME_MDB}`;

mongoose.connect(URI)
.then(() => console.log('conexion exitosa en mongodb'))
.catch(err => console.error('error al conectar en mongo db:',err));

module.exports = mongoose;