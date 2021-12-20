const {Schema,model} = require('mongoose');

const Admin = new Schema({

    usuario:{
        type: "string",
        required: true
    },
    email:{
        type: "email",
        required: true
    },
    id:{
        type: "string",
        unique: true,
        required: true
    },
    contacto:{
        type: "number",
        required: true
    },
    dependencia:{
        type: "string",
        required: true
    }
})

const Admin = model("Administrador",Admin);
exports.Admin=Admin;