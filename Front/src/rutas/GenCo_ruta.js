const { Router }= require("express");
const GenCo_ruta = Router();
const {GenCo} = require("../modelos/GenCo");

GenCo_ruta.post("/guardar", function(req,res){
    const Gen = req.body;
    const cobro = new GenCo(Gen)
    cobro.save(function(err){
        if(err){
            res.send({status:"Error",msg:"No se pudo guardar el cobro"})
            return false;
        }
        res.send({status:"Ok",msg:"El cobro se guardó satisfactoriamente"})
    })

});