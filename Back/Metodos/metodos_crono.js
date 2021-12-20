const fechas_validas = (fecha1,fecha2) =>{
    v1 = validar_fecha(fecha1);
    v2 = validar_fecha(fecha2);
    if ( v1 != "Fecha válida"){
        console.log(v1);
        return v1
    }
    if ( v2 != "Fecha válida"){
        return v2
    }
    f = new Date(parseInt(fecha1.substr(6),10),parseInt(fecha1.substr(0,2),10),parseInt(fecha1.substr(3,2),10));
    f2 = new Date(parseInt(fecha2.substr(6),10),parseInt(fecha2.substr(0,2),10),parseInt(fecha2.substr(3,2),10));
    if(f2 < f){
        return "Valido"
    }
    else{
        return "Fecha de descuento posterior a la de pago máximo"
    }
};

const validar_fecha = (fecha) => {
    if (fecha.length == 10){
        if(fecha[2] != "-" || fecha[5] != "-"){
            return "Formato de fecha inválido";
        }else{
            if (parseInt(fecha.substr(0,2),10) > 12){
                return "Fecha inválida";
            }
            if (parseInt(fecha.substr(3,2),10) > 31){
                return "Fecha inválida";
            }
            
            try {
                f_actual = Date.now();
                f = new Date(parseInt(fecha.substr(6),10),parseInt(fecha.substr(0,2),10),parseInt(fecha.substr(3,2),10));
                if (f_actual < f){
                    return "Fecha válida";
                }
                else{
                    return "Fecha anterior a la actual"
                }

            } catch (error) {
                console.log("Deberá estar aquí");
                return "La fecha no es válida"
            }        
        }
    }else{
        return "Formato de fecha inválido";
    }
};

exports.fechas_validas = fechas_validas;