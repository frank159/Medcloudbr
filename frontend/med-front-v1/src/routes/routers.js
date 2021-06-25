import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {PatientFeed} from "../pages/patientsPage/pacientesFeed";
import {PacientesPerfil} from "../pages/patientsProfile/pacientesPerfil";
import {CreatePatient} from "../pages/patientsCreate/createPatient";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Header from "../components/header/header";
import GlobalState from "../global/GlobalState";

const Router = () => {
  return (
    <BrowserRouter>
    <GlobalState>
      <Header />
      <Switch>
        <Route exact path="/users">
          <PatientFeed/>
        </Route>
        <Route exact path="/user/:id">
          <PacientesPerfil/>
        </Route>
        <Route exact path="/">
          <CreatePatient/>
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      </GlobalState>
    </BrowserRouter>
  );
};

export default Router;