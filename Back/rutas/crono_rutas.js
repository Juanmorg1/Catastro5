const { Router } = require("express");
const crono_rutas = Router();
const {crono_model} = require("../modelos/crono_model")
const {fechas_validas} = require("../Metodos/metodos_crono")

crono_rutas.post("/guardar", async function(req,res){
    try {
        console.log("ENTRANDO AQUÍ ------------------------------------");
        const datos = req.body;
        mensaje = await fechas_validas(datos.f_max_pago,datos.f_max_descuento);
        console.log(mensaje);
        if(mensaje == "Valido"){
            console.log("si entro a valido");
            const crono = new crono_model(datos);
            crono.save(function(error){
                if (error){
                    console.log(error);
                    console.log("Si entra");
                    return res.status(500).send({estado:"Error",msg:"Datos NO guardados"})
                }
                return res.status(200).send({estado:"OK",msg:"Datos guardados correctamente"})
            });
        }
        else{
            console.log("Por que aqui")
            return  res.status(401).send({estado:"error",msg:mensaje})
        }
    } catch (error) {
        return res.status(401).send({estado:"error",msg:"Error al validar fechas"})
    }
});

exports.crono_rutas = crono_rutas;