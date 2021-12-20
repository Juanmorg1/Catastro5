const {Schema,model} = require('mongoose');

const DatUserExter = new Schema({
    Usuario:{
        type: "string",
        required: true
    },
    Correo:{
        type: "email",
        unique:true,
        required: true
    },
    Contraseña:{
        type: "password",
        unique: true,
        required: true
    },
    type_user:{
        type: "string",
        required: true
    }
})

const DatUserExter = model("DatosUsuarios",DatUserExter);
exports.DatUserExter=DatUserExter;