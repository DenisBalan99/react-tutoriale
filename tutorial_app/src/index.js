import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/dashboard/dashboard";
import NavBar from "./components/NavBar/navBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Dashboard />
  </React.StrictMode>
);
