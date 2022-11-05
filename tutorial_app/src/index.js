import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/dashboard/dashboard";
import NavBar from "./components/NavBar/navBar";
import ExpandingCards from "./components/tutoriale/udemy/expandingCards/expanding-cards/expandingCards";
import ProgressSteps from "./components/tutoriale/udemy/expandingCards/progress-steps/progress-steps";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <NavBar />
    <Dashboard /> */}
    {/* <ExpandingCards /> */}
    <ProgressSteps />
  </React.StrictMode>
);
