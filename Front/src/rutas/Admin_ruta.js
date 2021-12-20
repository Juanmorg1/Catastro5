const { Router }= require("express");
const Admin_ruta = Router();
const {Admin} = require("../modelos/Admin");

Admin_ruta.post("/crear", function(req,res){
    const adm = req.body;
    const us = new Admin(adm)
    us.save(function(err){
        if(err){
            res.send({status:"Error",msg:"No se creo el usuario"})
            return false;
        }
        res.send({status:"Ok",msg:"El usuario fue creado satisfactoriamente"})
    })

});

Admin_ruta.post("/actualizar", function(req,res){
    const usu=req.body.usuario;
    const em=req.body.email;
    const p=req.body.id;
    const con=req.body.contacto;
    const dep=req.body.dependencia
    let i=0;
    const l = {
        usuario:usu,
        email:em,
        id:p,
        contacto:con,
        dependencia:dep
    };
    for (const a of Administrador) {
        if (a.usuario.toLowerCase()==usu.toLowerCase()) {
            Administrador[i]= l;
        break;}
        i=i+1; 
    }
    console.log(Administrador);
    res.send({status:"Ok",msg:"El usuario fue actualizado satisfactoriamente"})

})

Admin_ruta.post("/borrar", function(req,res){
    const usu=req.body.usuario;
    let i=0;
    
    for (const a of Administrador) {
        if (a.usuario.toLowerCase()==usu.toLowerCase()) {
            Administrador.splice(i, 1)
        break;}
        i=i+1; 
    }
    console.log(Administrador);
    res.send({status:"Ok",msg:"EL usuario fue eliminado satisfactoriamente"})

})

Admin_ruta.post("/buscar",function(req,res){
    // Capturar lo que esta en la caja de texto: la de Nombre
    const {usuario}=req.body;
    console.log(usuario);
    // Buscar ese jugador en la BD
    Admin.findOne({usuario},function(error,us){
        if (error){
            res.send({status:"ERROR!!!",msg:"Usuario NO encontrado"});
            return false;        
        }
        else{
            if (us !== null){
                res.send({status:"Ok",msg:"Usuario encontrado",adm:us});            
            }
            else{
                res.send({status:"ERROR!!!",msg:"Usuario NO encontrado"});
            }
        }
    })

    // Listar ?
});