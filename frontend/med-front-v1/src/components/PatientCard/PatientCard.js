import React, { useContext } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import {
  PostCardContainer,
  PostCardContent,
  LeftContent,
  RightContent,
} from "./Styled";

const PatientCard = (props) => {

  return (
    <PostCardContainer>
      <PostCardContent>
        <CardActionArea>
          <RightContent onClick={props.onClickCard}>
            <Typography gutterBottom variant="h4">
              {props.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {props.email}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Age {props.age}
            </Typography>
          </RightContent>
        </CardActionArea>
      </PostCardContent>
    </PostCardContainer>
  );
};

export default PatientCard;