import { Link } from "react-router-dom";

export function PlatPagosExt() {
  return (
    <div className="container">
      <header class="index_home">
        <h1 class="title">Alcaldia de ibague</h1>
        <nav class="navbar subtitle">
          <Link to="/gestPrediosExt" className="">
            Predios
          </Link>
          
          <Link to="/PlatPagosExt" className="active">
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
        <section className="content_4_pagos">
          <div className="subContent_1">
            <h3 className="subtitle">Plataforma de Pagos</h3>
            <form action="" method="post" className="grilla_UE txt">
              <div className="codPred">
                <label htmlFor="cod_">Codigo del Predio</label>
                <input type="text" name="" id="cod_" />
              </div>
              <div className="cedProp">
                <label htmlFor="ced_">Ced. Propietario</label>
                <input type="text" name="" id="ced_" />
              </div>
              <div className="NomProp">
                <label htmlFor="nom_">Nombre del Propietario</label>
                <input type="text" name="" id="nom_" />
              </div>
              <div className="ValPag">
                <label htmlFor="value">Valor a Pagar</label>
                <input type="text" name="" id="value" />
              </div>
              <div className="dirPred">
                <label htmlFor="dir_">Direccion del Predio</label>
                <input type="text" name="" id="dir_" />
              </div>
              <div className="areaT">
                <label htmlFor="ar_t">Area Total</label>
                <input type="text" name="" id="ar_t" />
              </div>
              <div className="areaC">
                <label htmlFor="ar_c">Area Construida</label>
                <input type="text" name="" id="ar_c" />
              </div>
              <div className="pagoDesc">
                <label htmlFor="pay">Pago con Descuento</label>
                <input type="text" name="" id="pay" />
              </div>
              <div className="null"></div>
              <div className="btn_1">
                <button>Buscar Pago</button>
              </div>
              <div className="btn_2">
                <button>Pagar Impuesto</button>
              </div>
            </form>
          </div>
          <div className="subContent_2">
            <h3 className="subtitle">Acuerdos de Pago</h3>
            <form action="" method="post" className="subContent_a txt">
              <div className="check">
                <input type="checkbox" name="" id="acuerdos" />
                <label htmlFor="acuerdos">
                  Deseo solicitar un Acuerdo de Pago del Impuesto Predial
                  Correspondiente al año en curso, (Impuestos Vencidos a la
                  Fecha).
                </label>
              </div>
              <div className="xxx">
                <div>
                  <label htmlFor="x1">Valor a Pagar</label>
                  <input type="text" name="" id="x1" />
                </div>
                <div>
                  <label htmlFor="x2">Pago en Meses</label>
                  <input type="text" name="" id="x2" />
                </div>
                <div>
                  <label htmlFor="x3">Intereses</label>
                  <input type="text" name="" id="x3" />
                </div>
                <div>
                  <label htmlFor="x4">Pago con Intereses</label>
                  <input type="text" name="" id="x4" />
                </div>
                <div>
                  <button>Solicitar Acuerdo</button>
                </div>
              </div>
            </form>
          </div>
          {/* <div className="subContent">
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
          </div> */}
        </section>
      </section>
      <footer className="foot_2">
        <hr />
      </footer>
    </div>
  );
}

export default PlatPagosExt;
