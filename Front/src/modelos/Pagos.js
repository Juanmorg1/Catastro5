const {Schema,model} = require('mongoose');

const Pagos = new Schema({
    cod:{
        type: "number",
        unique: true,
        required: true
    },
    ced:{
        type: "number",
        required: true
    },
    nom:{
        type: "string",
        required: true
    },
    val:{
        type: "number",
        required: true
    },
    dir:{
        type: "string",
        required: true
    },
    at:{
        type: "number",
        required: true
    },
    ac:{
        type: "number",
        required: true
    },
    pd:{
        type: "number",
        required: true
    },

})

const Pagos = model("pagos",Pagos);
exports.Pagos=Pagos;