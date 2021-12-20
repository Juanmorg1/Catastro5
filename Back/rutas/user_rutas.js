const {compare} = require("bcrypt")
const { Router } = require("express");
const user_rutas = Router();
const {user_model} = require("../modelos/user_model")
const {sign} = require("jsonwebtoken")
const {guardian} = require("../guardian/guardian")

user_rutas.post("/login", async function(req,res){
    try {
        const {correo,contrasena} = req.body;
        console.log(req.body);
        const usuario = await user_model.findOne({correo});
        if (!usuario){
            return res.status(401).send({estado:"Error",msg:"Credenciales no válidas"})
        }
        const passok = await compare(contrasena,usuario.contrasena);
        console.log("--------------------------------------------------------"),
        console.log(passok);
        if(passok){
            const token = sign({correo:usuario.correo, rol:usuario.rol},process.env.JWT_SECRET_KEY)
            const rolusu = usuario.rol;
            return res.status(200).send({estado:"OK",msg:"Logueado",token,rolusu})
        }
        else{ 
            return res.status(401).send({estado:"Error",msg:"Credenciales no validas"})
        }
    } catch (error) {
        
    }
});

user_rutas.post("/consultar_user", async function(req,res){
    const {usuario}=req.body;
    console.log(usuario);
    user_model.findOne({usuario},function(error,datos){
        if (error){
            return res.status(401).send({estado:"Error!!!",msg:"Usuario NO Encontrado"});
        }
        else{
            if (datos !== null){
                return res.status(200).send({estado:"OK",msg:"Usuario Encontrado", dato:datos});
            }
            else{
                return res.status(401).send({estado:"Error!!!",msg:"Usuario NO Encontrado", dato:datos});
            }
        }
    })
})

user_rutas.post("/eliminar_user", async function(req,res){
    const {usuario}=req.body;
    console.log(usuario);
    // Buscar ese jugador en la BD
    user_model.deleteOne({usuario},function(error,datos){
    console.log(datos);
        if (datos.deletedCount==0 || error){
            return res.status(401).send({estado:"Error!!!",msg:"Usuario NO Eliminado"});
        }
        return res.status(200).send({estado:"OK",msg:"Usuario Eiminado"});
    })
})

user_rutas.post("/actualizar_user", async function(req,res){
    const datos = req.body;
    if (datos.usuario != null && datos.usuario!=" "){
        user_model.updateOne({usuario:datos.usuario},{$set:{coreo:datos.correo,contrasena:datos.contrasena,rol:datos.rol}},function(err){
            if(err){
                return res.status(401).send({estado:"Error!!!",msg:"Usuario NO Actualizado"});
            }
            return res.status(200).send({estado:"OK",msg:"Usuario Actualizado"});
        })
    }
})

user_rutas.post("/guardar_user", async function(req,res){
    console.log("Aqui");
    const datos = req.body;
    const usuario = new user_model(datos);
    console.log(datos);
    usuario.save(function(error){
        if (error){
            console.log("Entre aca")
            return res.status(401).send({estado:"Error",msg:"Usuario NO Guardado"})
        }
        return res.status(200).send({estado:"OK",msg:"Guardado"})
    })
})

exports.user_rutas = user_rutas;