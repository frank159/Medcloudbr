import React, { useContext } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import {
  PostCardContainer,
  PostCardContent,
  LeftContent,
  RightContent,
} from "./Styled";
import { goToPatientFeed } from "../../routes/coordinator"
import axios from "axios";
import BASE_URL from "../../constants/urls"
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Button } from "@material-ui/core";
import { format, compareAsc } from 'date-fns'


const PatientProfileCard = (props) => {
  const { requests } = useContext(GlobalStateContext);
  const history = useHistory();

  const deletePatient = () => {

    const data = { id: props.id }
    axios.delete(
      `${BASE_URL}/user/delete`,
      {data}
    )
    .then(() => {
      requests.getPatient()
      goToPatientFeed(history)
    })
    .catch((error) => console.log(error) )
  }

  return (
    <PostCardContainer>
      <PostCardContent>
          <RightContent>
            <Typography gutterBottom variant="h4">
              {props.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {props.email}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
            <strong>mother's name:</strong> {props.mothersName}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
            <strong>birthday:</strong> {props.birthday}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
            <strong>entrance:</strong> {props.entrance}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
            <strong>released:</strong> {props.released}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
            <strong>historic:</strong> {props.historic}
            </Typography>
            <Typography variant="body2" color="subtitle1">
            <strong>Age:</strong> {props.age}
            </Typography>
          </RightContent>
          <LeftContent>
          <Button onClick={deletePatient} variant="contained" color="primary" disableElevation>
            X
          </Button>
          </LeftContent>
      </PostCardContent>
    </PostCardContainer>
  );
};

export default PatientProfileCard;