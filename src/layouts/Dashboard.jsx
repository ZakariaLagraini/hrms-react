import React from "react";
import Home from "../pages/Home";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";
import Login from '../pages/Login';
import OrdreDeMission from '../pages/OrdreDeMission';
import AttestationDeTravail from "../pages/AttestationDeTravail";
import AttestationDeVacation from "../pages/AttestationDeVacation";
import DemandeDeQuitterTerritoire from "../pages/DemandeDeQuitterTerritoire";
import About from '../pages/About';
import MyHistory from '../pages/MyHistory';
import HistoryOrdreDeMission from "../pages/HistoryOrdreDeMission";
import HistoryAttestationDeTravail from "../pages/HistoryAttestationDeTravail";
import HistoryAttestationDeVacation from "../pages/HistoryAttestationDeVacation";
import HistoryDemandeDeQuitterTerritoire from "../pages/HistoryDemandeDeQuitterTerritoire";
import Employee from "../pages/Employee";
import EmployeeAdd from "../pages/EmployeeAdd";

export default function Dashboard() {

 var isLoggedIn = window.sessionStorage.getItem("userid") != null;

  return (
    <div>
      <ToastContainer position="bottom-right"/>
          <Route exact path="/" component={isLoggedIn ? Home:Login}/>
          <Route exact path="/login" component={isLoggedIn ? Home:Login}/>
          <Route path="/ordre-de-mission" component={isLoggedIn ? OrdreDeMission:Login} />
          <Route path="/attestation-de-travail" component={isLoggedIn ? AttestationDeTravail:Login} />
          <Route path="/attestation-de-vacation" component={isLoggedIn ? AttestationDeVacation:Login} />
          <Route path="/demande-de-quitter-territoire" component={isLoggedIn ? DemandeDeQuitterTerritoire:Login} />
          <Route path="/about" component={isLoggedIn ? About:Login}/>
          <Route path="/my-history" component={isLoggedIn ? MyHistory:Login}/>
          <Route path="/history-ordre-de-mission" component={isLoggedIn ? HistoryOrdreDeMission:Login}/>
          <Route path="/history-attestation-de-travail" component={isLoggedIn ? HistoryAttestationDeTravail:Login}/>
          <Route path="/history-attestation-de-vacation" component={isLoggedIn ? HistoryAttestationDeVacation:Login}/>
          <Route path="/history-demande-de-quitter-territoire" component={isLoggedIn ? HistoryDemandeDeQuitterTerritoire:Login}/>
          <Route path="/employee" component={isLoggedIn ? Employee:Login} />
          <Route path="/employee-add" component={isLoggedIn ? EmployeeAdd:Login} />
    </div>
  );
}