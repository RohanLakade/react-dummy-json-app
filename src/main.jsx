import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@src/App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@styles/index.scss";

import { ProductProvider } from "./context/ProductContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>
);
