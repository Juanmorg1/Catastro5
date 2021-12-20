import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export function CronoPagosAdm(){
  const [error, setError] = useState();
  const [msgError, setMsgError] = useState();
  const fechaMax = useRef();
  const fechaDes = useRef();
  const desc = useRef();
  const id = useRef();

  let cronoPa=[];
  const guardar = () =>{
    const f_max_pago = fechaMax.current.value;
    const f_max_descuento = fechaDes.current.value;
    const descuento = desc.current.value;
    const id_usuario = id.current.value;

    fetch("http://localhost:8081/cronograma/guardar",{
      headers: {"content-type":"application/json"},
      method: "POST",
      body: JSON.stringify({f_max_pago,f_max_descuento,descuento,id_usuario})
    })
    .then(res => res.json())
    .then(res =>{
      console.log(res);
      setError(true);
      setMsgError(res.msg);
    })
  };
    

  const GenCo = () =>{
        
  };

  return (

    <div className="container">
      <header class="index_home">
        <h1 class="title">Alcaldia de ibague</h1>
        <nav class="navbar subtitle">
        <Link to="/gestUsuarios" className="">Usuarios</Link>
              <Link to="/gestPrediosAdm" className="">Predios</Link>
              <Link to="/CronoPagosAdm" className="">Cronograma</Link>
              <Link to="/PlatPagosAdm" className="">Pagos</Link>
              <Link to="/" className="">Cerrar Sesión</Link>
        </nav>
      </header>
      <section className="content">
        <section className="content_1">
          <dl className="txt">
            <dt>Gestion de Predios</dt>
            <dd>Crear Predio</dd>
            <dd>Actualizar Propietario</dd>
            <dd>Buscar Predios</dd>
            <dt>Cronograma de Pagos</dt>
            <dd>Generacion de Cobros</dd>
            <dd>Fecha Maxima de Pago</dd>
            <dd>Fecha de Pago con Descuento</dd>
            <dt>Plataforma de Pago</dt>
            <dd>Generacion de Multas</dd>
            <dd>Acuerdos de Pago</dd>
          </dl>
        </section>
        <section className="content_2_crono">
          <div className="image">
            <img src="img/cronograma.jpg" alt="" />
            <p className="">Cronograma de Pagos</p>
          </div>
          <form className="inputs txt" method="post" action="">
            <div>
            {error && <div className="alert alert-danger">{msgError}</div>}
            <br/>
              <label htmlFor="fechaMax">
                Fecha Maxima de Pago de Impuestos (MM-DD-AAAA)
              </label>
              <input type="text" name="" id="fechaMax" ref={fechaMax} />
            </div>
            <div>
              <label htmlFor="fechaMaxDesc">
                Fecha Maxima de Pago con Descuento (MM-DD-AAAA)
              </label>
              <input type="text" name="" id="fechaMaxDesc" ref={fechaDes} />
            </div>
            <div>
              <label htmlFor="descAñoVigen">
                Descuento Asignado para Año Vigente (Porcentaje)
              </label>
              <input type="text" name="" id="descAñoVigen" ref={desc} />
            </div>
            <div>
              <label htmlFor="idUserAutori">
                ID de Usuario que Autoriza las Fechas y Descuentos
              </label>
              <input type="text" name="" id="idUserAutori" ref={id} />
            </div>
            <button type="button" className="btn btn-primary" onClick={guardar}> Guardar </button>
            <button type="button" className="btn btn-primary" onClick={GenCo}> Generar Cobro </button>
          </form>
        </section>
      </section>
      <footer className="foot_2">
        <hr />
      </footer>
    </div>
  );
}

export default CronoPagosAdm;
