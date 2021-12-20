import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {HomeInt} from "./components/HomeInt";
import {HomeAdm} from "./components/HomeAdm";
import {HomeExt} from "./components/HomeExt";
import {GestPrediosInt} from "./components/GestPrediosInt";
import {GestPrediosAdm} from "./components/GestPrediosAdm";
import {GestPrediosExt} from "./components/GestPrediosExt";
import {CronoPagosInt} from "./components/CronoPagosInt";
import {CronoPagosAdm} from "./components/CronoPagosAdm";
import {CronoPagosExt} from "./components/CronoPagosExt";
import {PlatPagosInt} from "./components/PlatPagosInt";
import {PlatPagosAdm} from "./components/PlatPagosAdm";
import {PlatPagosExt} from "./components/PlatPagosExt";
import {GestUsuarios} from "./components/GestUsuarios";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/homeint" element={<HomeInt />} />
        <Route path="/homeadm" element={<HomeAdm />} />
        <Route path="/homeext" element={<HomeExt />} />
        <Route path="/gestPrediosInt" element={<GestPrediosInt />} />
        <Route path="/gestPrediosAdm" element={<GestPrediosAdm />} />
        <Route path="/gestPrediosExt" element={<GestPrediosExt />} />
        <Route path="/CronoPagosInt" element={<CronoPagosInt />} />
        <Route path="/CronoPagosAdm" element={<CronoPagosAdm />} />
        <Route path="/CronoPagosExt" element={<CronoPagosExt />} />
        <Route path="/PlatPagosInt" element={<PlatPagosInt />} />
        <Route path="/PlatPagosExt" element={<PlatPagosExt />} />
        <Route path="/PlatPagosAdm" element={<PlatPagosAdm />} />
        <Route path="/gestUsuarios" element={<GestUsuarios />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();