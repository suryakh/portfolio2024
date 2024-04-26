import React from "react";
import ReactDOM from "react-dom";
import App from "./src/app";
import { BrowserRouter } from "react-router-dom";
import UsingColorObject from './src/shared/utils/miuiTheme.tsx'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UsingColorObject>
      <App />
      </UsingColorObject>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
