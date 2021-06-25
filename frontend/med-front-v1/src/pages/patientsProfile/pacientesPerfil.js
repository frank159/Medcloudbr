import React, { useContext, useEffect, useState } from "react";
import {  } from "./Styled";
import PatientProfileCard from "../../components/PatientProfileCard/PatientProfileCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useHistory, useParams } from "react-router-dom";
import {ScreenContainer} from "./Styled";
import { format, parseISO } from "date-fns";

export const PacientesPerfil = () => {
    const { requests } = useContext(GlobalStateContext);
    const [patient, setPatient] = useState({});
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
      getPatient();
    },[]);

    const getPatient = () => {
     const newPatient = requests.patient.filter((item) => {
        return item.id === id
      })
      setPatient(newPatient[0]);
    }

    return (
        <ScreenContainer>
          {patient.id && 
            <PatientProfileCard
              key={patient.id}
              id={patient.id}
              name={patient.name}
              age={patient.age}
              email={patient.email}
              birthday={format(parseISO(patient.birthday), 'dd/MM/yyyy')}
              entrance={format(parseISO(patient.entrance), 'dd/MM/yyyy')}
              released={format(parseISO(patient.released), 'dd/MM/yyyy')}
              historic={patient.historic}
              mothersName={patient.mothersName}  
        />
        }
        </ScreenContainer>
      );
}