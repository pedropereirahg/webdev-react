import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import purple from "material-ui/colors/purple";
import green from "material-ui/colors/green";
import red from "material-ui/colors/red";
import grey from "material-ui/colors/grey";

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  },
  overrides: {
    root: {
      margin: 10,
      flexGrow: 1
    },
    MuiPaper: {
      root: {
        padding: 16,
        margin: 10,
        color: grey[900]
      }
    },
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .30)"
      }
    }
  }
});

const MaterialApp = () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<MaterialApp />, document.getElementById("root"));

registerServiceWorker();
