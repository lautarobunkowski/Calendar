import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </Provider> */}
    </AuthProvider>
  </React.StrictMode>
);
