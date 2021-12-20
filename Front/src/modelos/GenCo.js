const {Schema,model} = require('mongoose');

const GenCo = new Schema({
    fechaMax:{
        type: "date",
        required: true
    },
    fechaDes:{
        type: "date",
        required: true
    },
    descuento:{
        type: "number",
        required: true
    },
    id:{
        type: "stringr",
        unique: true,
        required: true
    }

})

const GenCo = model("generador_cobro",GenCo);
exports.GenCo=GenCo;