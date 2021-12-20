const {Schema,model} = require('mongoose');

const prediosModel = new Schema({
    cod:{
        type: "number",
        unique: true,
        required: true
    },
    nom:{
        type: "string",
        required: true
    },
    doc:{
        type: "number",
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
    bar:{
        type: "string",
        required: true
    },
    dir:{
        type: "string",
        required: true
    },

})

const prediosModel = model("predio",prediosModel);
exports.prediosModel=prediosModel;