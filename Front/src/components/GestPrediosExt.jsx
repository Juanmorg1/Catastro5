import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Lista_Predios } from "./Lista_Predios";
import PlatPagosExt from "./PlatPagosExt";

export function GestPrediosExt(){
    const [error,setError] = useState();
    const [msgerror,setMsgerror] = useState();
    const cod = useRef();
    const nom = useRef();
    const doc = useRef();
    const at = useRef();
    const ac = useRef();
    const bar = useRef();
    const dir = useRef();

    
    function buscar(){
        const codpre = cod.current.value;
        
        fetch("http://localhost:8081/predios/consultar",{
            headers : {"content-type":"application/json"},
            method:"POST",
            body: JSON.stringify({codpre})
        })
        .then(res=>res.json())
        .then(res=>{
            console.log("Esta aqui")
            if (res.estado=="OK"){
                nom.current.value = res.dato.nompro;
                doc.current.value = res.dato.docpro;
                at.current.value = res.dato.areat;
                ac.current.value = res.dato.areac;
                bar.current.value = res.dato.barrio;
                dir.current.value = res.dato.direc;
                setError(true);
                setMsgerror(res.msg);
            }
            else{
                setError(true);
                setMsgerror(res.msg);
            }
        })
        .catch(res => {
            setError(true);
            setMsgerror(res.msg);
        })
    };

    return (

        <div className="container">
          <header class="index_home">
            <h1 class="title">Alcaldia de ibague</h1>
            <nav class="navbar subtitle">
              <Link to="/gestPrediosExt" className="active">
                Predios
              </Link>
              
              <Link to="/PlatPagosExt" className="">
                Pagos
              </Link>
              <Link to="/" className="">
                Cerrar Sesión
              </Link>
            </nav>
          </header>
          <section className="content">
            <section className="content_1">
              <dl className="txt">
                <dt>Gestión de Predios</dt>
                <dd>Crear Predio</dd>
                <dd>Actualizar Propietario</dd>
                <dd>Buscar Predios</dd>
                <dt>Cronograma de Pagos</dt>
                <dd>Generación de Cobros</dd>
                <dd>Fecha Máxima de Pago</dd>
                <dd>Fecha de Pago con Descuento</dd>
                <dt>Plataforma de Pago</dt>
                <dd>Generación de Multas</dd>
                <dd>Acuerdos de Pago</dd>
              </dl>
            </section>
            <section className="content_2">
              
              <form action="" className="grilla txt" method="post">
                  <div className="Cod_Pred">
                    <label htmlFor="cod">Código del Predio</label>
                    <input type="text" id="cod" ref={cod}/>
                  </div>
                  <div className="Nom_Prop">
                    <label htmlFor="nom">Nombre del Propietario</label>
                    <input type="text" id="nom" ref={nom}/>
                  </div>
                  <div className="Ced_Prop">
                    <label htmlFor="ced">Cédula de Propietario</label>
                    <input type="text" id="ced" ref={doc}/>
                  </div>
                  <div className="Area_T">
                    <label htmlFor="ar_t">Área Total</label>
                    <input type="text" id="ar_t" ref={at}/>
                  </div>
                  <div className="Area_C">
                    <label htmlFor="ar_c">Área Construida</label>
                    <input type="text" id="ar_c" ref={ac}/>
                  </div>
                  <div className="Barrio_Pred">
                    <label htmlFor="bar">Barrio del Predio</label>
                    <input type="text" id="bar" ref={bar}/>
                  </div>
                  <div className="Dir_Pred">
                    <label htmlFor="dir">Dirección del Predio</label>
                    <input type="text" id="dir" ref={dir}/>
                  </div>
                  <div className="Info_Pred">
                    {error && <div className="alert alert-danger">{msgerror}</div>}  
                  </div>
                  <div className="Create_btn btns">
                    <button type="button" onClick={buscar}>Busca Predio</button>
                  </div>
                  <div className="Update_btn btns">
                    <button type="button" >Acuerdos de Pago</button>
                  </div>
                  <div className="Search_btn btns">
                    <button type="button" >Mis Predios</button>
                  </div>
                  <div className="Delete_btn btns">
                    <button type="button" onClick={<PlatPagosExt/>}>Plataforma de Pago</button>
                  </div>
              </form>
            </section>
          </section>
          <footer className="foot_2">
            <hr />
          </footer>
        </div>
      );
}  