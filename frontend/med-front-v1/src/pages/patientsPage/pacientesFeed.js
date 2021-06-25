import React, { useContext, useEffect } from "react";
import {ScreenContainer, Text} from "./Styled";
import PatientCard from "../../components/PatientCard/PatientCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import { goPerfil } from "../../routes/coordinator";

export const PatientFeed = () => {
  const { requests } = useContext(GlobalStateContext);
    const history = useHistory();

    const onClickCard = (id) => {
      goPerfil(history, id);
    };

    const patientList =
    requests.patient &&
    requests.patient.map((patient) => {
      return (
      
        <PatientCard
          key={patient.id}
          name={patient.name}
          age={patient.age}
          email={patient.email}
          onClickCard={() => onClickCard(patient.id)}
        />
      );
    });

    return (
      <ScreenContainer>
        <Text>Pacientes registrados</Text>
        {patientList}
      </ScreenContainer>
    );
}