const {Schema,model} = require('mongoose');

const prediosesquema = new Schema({
    codpre:{
        type: "number",
        unique:true,
        required:true
    },
    nompro:{
        type: "string",
        unique:true,
        required:true
    },
    docpro:{
        type: "number",
        unique:true,
        required:true
    },
    areat:{
        type: "number",
        required:true
    },
    areac:{
        type: "number",
        required:true
    },
    barrio:{
        type: "string",
        required:true
    },
    direc:{
        type: "string",
        required:true
    }
})

const predios_model = model("predios",prediosesquema);
exports.predios_model=predios_model;