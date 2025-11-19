import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import GlobalStyles from "./GlobalStyle";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyles />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
