import { Link } from "react-router-dom";

export function HomeExt() {
  return (
    <div class="container">
      <header class="index_home">
          <h1 class="title">Alcaldia de ibague</h1>
        <nav class="navbar subtitle">
          <Link to="/gestPrediosExt" className="">Predios</Link>
          
          <Link to="/PlatPagosExt" className="">Pagos</Link>
          <Link to="/" className="">Cerrar Sesión</Link>
        </nav>
      </header>
      <div class="home_container">
        <div class="home_content">
          <div class="icons subtitle">
            <div class="icon_cont">
              <Link to="/gestPrediosExt">
              <img src="img/workplace_results_professional_report_accounting_during_1.png" alt=""/>
              </Link>
              <p>Gestión de Predios</p>
            </div>
            
            <div class="icon_cont">
            <Link to="/PlatPagosExt" className="">
              <img src="img/hand_with_credit_card_laptop_1.png" alt="" />
            </Link>
              <p>Plataforma de Pago</p>
            </div>
          </div>
          <div class="offer">
            <div class="offer_cont_1">
              <p>Pague antes del</p>
            </div>
            <div class="offer_cont_2">
              <p>
                <span>15</span>
                <br />
                de marzo
              </p>
            </div>
            <div class="offer_cont_1">
              <p>y obtenga un descuento del</p>
            </div>
            <div class="offer_cont_2">
              <p>
                <span>10%</span>
              </p>
            </div>
            <div class="offer_cont_3">
              <p>en su impuesto predial</p>
            </div>
          </div>
        </div>
      </div>
      <footer class="foot">
        <div class="footer_cont txt">
          <p>
            Gobernación del Tolima <br />
            Ibagué - Capital Musical de Colombia
          </p>
          <p>@2021 Copyright - Team Seven</p>
          <p>
            info_catastro@ibague.com.co
            <br />
            Conmutador: 608-7654321 Extensión: 12345{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomeExt;
