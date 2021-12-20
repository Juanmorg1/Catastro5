const { Router } = require("express");
const predios_rutas = Router();
const {predios_model} =require("../modelos/predios_model");

predios_rutas.post("/crear", function(req,res){
    const datos = req.body;
    const predio = new predios_model(datos);
    console.log(datos);
    predio.save(function(err){
        if(err){
            return res.status(401).send({estado:"Error!!!",msg:"Predio NO Guardado"});
        }
        return res.status(200).send({estado:"OK",msg:"Predio Guardado"});
    })
});

predios_rutas.post("/consultar",function(req,res){
    // Capturar lo que esta en la caja de texto: la de Nombre
    const {codpre}=req.body;
    console.log(codpre);
    // Buscar ese jugador en la BD
    predios_model.findOne({codpre},function(error,predio){
        if (error){
            return res.status(401).send({estado:"Error!!!",msg:"Predio NO Encontrado"});
        }
        else{
            if (predio !== null){
                return res.status(200).send({estado:"OK",msg:"Predio Encontrado", dato:predio});
            }
            else{
                return res.status(401).send({estado:"Error!!!",msg:"Predio NO Encontrado", dato:predio});
            }
        }
    })
    // Mandar mensaje a cliente SI lo encontre o NO  (res.send)
});

predios_rutas.post("/actualizar", function(req,res){
    const datos = req.body;
    if (datos.codpre != null && datos.codpre!=" "){
        predios_model.updateOne({codpre:datos.codpre},{$set:{nompro:datos.nompro,docpro:datos.docpro,areat:datos.areat,areac:datos.areac,barrio:datos.barrio,direc:datos.direc}},function(err){
            if(err){
                return res.status(401).send({estado:"Error!!!",msg:"Predio NO Actualizado"});
            }
            return res.status(200).send({estado:"OK",msg:"Predio Actualizado"});
        })
    }
})

predios_rutas.post("/eliminar", function(req,res){
    const {codpre}=req.body;
    console.log(codpre);
    // Buscar ese jugador en la BD
    predios_model.deleteOne({codpre},function(error,predio){
    console.log(predio);
        if (predio.deletedCount==0 || error){
            return res.status(401).send({estado:"Error!!!",msg:"Predio NO Eliminado"});
        }
        return res.status(200).send({estado:"OK",msg:"Predio Eiminado"});
    })
})

exports.predios_rutas=predios_rutas;