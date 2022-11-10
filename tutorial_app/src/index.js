import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/dashboard/dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ExpandingCards from "./components/tutoriale/udemy/expanding-cards/expandingCards";
import ProgressSteps from "./components/tutoriale/udemy/progress-steps/progress-steps";
import RotatingNavigation from "./components/tutoriale/udemy/rotating-navigation/rotatingNavigation";
import HiddenSearch from "./components/tutoriale/udemy/hidden-search/hidden-search";
import BlurryLoading from "./components/tutoriale/udemy/blurry-loading/blurry-loading";
import NavBar from "./components/NavBar/navBar";
import Projects from "./components/projects/projects";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/nav-bar" element={<NavBar />} />
        <Route path="/progress-steps" element={<ProgressSteps />} />
        <Route path="/expanding-cards" element={<ExpandingCards />} />
        <Route path="/rotating-navigation" element={<RotatingNavigation />} />
        <Route path="/hidden-search" element={<HiddenSearch />} />
        <Route path="/blurry-loading" element={<BlurryLoading />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
