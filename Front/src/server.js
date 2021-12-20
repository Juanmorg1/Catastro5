const mongoose = require("mongoose")
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:3000")
.then(res => console.log(res,"Conectado"))
.catch(err => console.log(err));

app.listen(8081, function(){
    console.log("servidor por el puerto 8081")
});