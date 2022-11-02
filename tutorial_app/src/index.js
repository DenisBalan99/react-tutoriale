import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/dashboard/dashboard";
import NavBar from "./components/NavBar/navBar";
import ExpandingCards from "./components/tutoriale/udemy/expandingCards/expandingCards";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <NavBar />
    <Dashboard /> */}
    <ExpandingCards />
  </React.StrictMode>
);
