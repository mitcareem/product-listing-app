import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/index.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Quicksand"].join(","),
    fontSize: 15,
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightRegular: 600,
    fontWeightBold: 700,
  },
});

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
