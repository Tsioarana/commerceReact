import React from "react";
import ReactDom from 'react-dom/client';
import App from "./App";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";




ReactDom.createRoot(document.getElementById("root")).render(
<BrowserRouter>
  <StoreContextProvider>
    <App/>
  </StoreContextProvider>
</BrowserRouter>)