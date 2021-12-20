const { Router }= require("express");
const DatUserExter_ruta = Router();
const {DatUserExter} = require("../modelos/DatUserExter");

DatUserExter_ruta.post("/crear", function(req,res){
    const datUser = req.body;
    const us = new DatUserExter(datUser)
    us.save(function(err){
        if(err){
            res.send({status:"Error",msg:"No se creo el usuario externo"})
            return false;
        }
        res.send({status:"Ok",msg:"El usuario fue creado satisfactoriamente"})
    })
});