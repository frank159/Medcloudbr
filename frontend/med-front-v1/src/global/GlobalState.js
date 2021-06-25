import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import BASE_URL from "../constants/urls";

export const GlobalState = (props) => {
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    getPatient();
  }, []);

  const getPatient = () => {
    axios
      .get(`${BASE_URL}/user/get`)
      .then((res) => {
        setPatient(res.data.patient);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const requests = {patient, getPatient };

  return (
    <GlobalStateContext.Provider value={{ requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
