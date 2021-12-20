const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const { predios_rutas } = require("./rutas/predios_rutas");
app.use("/predios",predios_rutas);

const {user_rutas} = require("./rutas/user_rutas");
app.use("/user",user_rutas);

const {crono_rutas} = require("./rutas/crono_rutas");
app.use("/cronograma",crono_rutas);

mongoose.connect(process.env.SERVER_DB_URL)
.then(res => console.log(res,"Conectado a la base de datos."))
.catch(err => console.log(err));

app.listen(8081, function(){
    console.log("servidor por el puerto 8081")
});