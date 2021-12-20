import { Link } from "react-router-dom";

export function HomeAdm() {
  return (
    <div class="container">
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
      <div class="home_container">
        <div class="home_content">
          <div class="icons subtitle">
            <div class="icon_cont">
              <Link to="/gestPrediosAdm">
              <img src="img/workplace_results_professional_report_accounting_during_1.png" alt=""/>
              </Link>
              <p>Gestión de Predios</p>
            </div>
            <div class="icon_cont">
            <Link to="/CronoPagosAdm" className="">
              <img src="img/group_business_people_having_meeting_1.png" alt=""/>
            </Link>
              <p>Cronograma de Pagos</p>
            </div>
            <div class="icon_cont">
            <Link to="/PlatPagosAdm" className="">
              <img src="img/hand_with_credit_card_laptop_1.png" alt="" />
            </Link>
              <p>Plataforma de Pago</p>
            </div>
          </div>
          <div class="offer1">
            <div class="icon_contadm">
              <Link to="/gestUsuarios">
              <img src="img/workplace_results_professional_report_accounting_during_1.png" alt=""/>
              </Link>
              <p>Gestión de Usuarios</p>
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

export default HomeAdm;
