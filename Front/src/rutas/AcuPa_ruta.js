const { Router }= require("express");
const AcuPa_ruta = Router();
const {AcuPa} = require("../modelos/AcuPa");

AcuPa_ruta.post("/solicitar", function(req,res){
    const acuerdo = req.body;
    const pago = new AcuPa(acuerdo)
    pago.save(function(err){
        if(err){
            res.send({status:"Error",msg:"No se pudo establecer la solicitud"})
            return false;
        }
        res.send({status:"Ok",msg:"La solicitud fue enviada exitosamente"})
    })

});