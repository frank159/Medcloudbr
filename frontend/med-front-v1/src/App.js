import React from "react";
import Router from "./routes/routers";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/thema";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Router />
    </ThemeProvider>
  );
};

export default App;
