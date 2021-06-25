import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import { useHistory } from "react-router-dom";
import { goToRegisterPage, goToPatientFeed } from '../../routes/coordinator';

const Header = () => {
  const history = useHistory();
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button color="inherit" onClick={() => goToRegisterPage(history)}>
          MedCloudbr Register
        </Button>
        <Button color="inherit" onClick={() => goToPatientFeed(history)}>
          MedCloudbr Feed
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;