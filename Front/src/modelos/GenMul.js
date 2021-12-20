const {Schema,model} = require('mongoose');

const GenMul = new Schema({
    
    morosos:{
        type: "string",
        required: true
    },
    convenioPago:{
        type: "string",
        required: true
    }

})

const GenMul = model("generador_multas",GenMul);
exports.GenMul=GenMul;