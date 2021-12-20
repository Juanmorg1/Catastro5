const {Schema,model} = require('mongoose');

const crono_esquema = new Schema({
    f_max_pago:{
        type: "string",
        required: true
    },
    f_max_descuento:{
        type: "string",
        required:true
    },
    descuento:{
        type: "number",
        required:true
    },
    id_usuario:{
        type: "string",
        required:true
    }
});

const crono_model = model("crono",crono_esquema);
exports.crono_model = crono_model;