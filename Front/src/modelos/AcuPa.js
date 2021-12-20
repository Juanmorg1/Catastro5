const {Schema,model} = require('mongoose');

const AcuPa = new Schema({
    valor:{
        type: "number",
        unique: true,
        required: true
    },
    cuotas:{
        type: "number",
        required: true
    },
    intereses:{
        type: "number",
        required: true
    },
    total:{
        type: "number",
        required: true
    }
})

const AcuPa = model("acuerdo_pago",AcuPa);
exports.AcuPa=AcuPa;