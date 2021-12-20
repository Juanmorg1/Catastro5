import { Link } from "react-router-dom";

export function PlatPagosInt() {
  return (
    <div className="container">
      <header class="index_home">
        <h1 class="title">Alcaldia de ibague</h1>
        <nav class="navbar subtitle">
          <Link to="/gestPrediosInt" className="">Predios</Link>
          <Link to="/CronoPagosInt" className="">Cronograma</Link>
          <Link to="/PlatPagosInt" className="">Pagos</Link>
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
        <section className="content_3_pagos">
          <div className="subContent">
            <h3 className="subtit">Generador de Multas</h3>
            <p className="txt">Informacion de Morosos</p>
            <div className="txtarea"></div>
            <div className="btns_pagos">
              <button>Cargar Morosos</button>
              <button>Generar Multa</button>
            </div>
          </div>
          <div className="subContent">
          <h3 className="subtit">Aprobar o Reprobar convenios de Pago</h3>
            <p className="txt">Convenios de Pago Solicitados</p>
            <div className="txtarea"></div>
            <div className="btns_pagos">
              <button>Aprobar</button>
              <button>Generar Multa</button>
            </div>
          </div>
        </section>
      </section>
      <footer className="foot_2">
        <hr />
      </footer>
    </div>
  );
}

export default PlatPagosInt;
