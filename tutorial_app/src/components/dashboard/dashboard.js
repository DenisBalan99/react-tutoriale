import React, { Component, useEffect, useState } from "react";
import About from "../about/about";
import Contact from "../contact/contact";
import NavBar from "../NavBar/navBar";
import Projects from "../projects/projects";
import "./dashboard.css";

export default function Dashboard() {
  const [currentRoute, setCurrentRoute] = useState("projects");

  const displayRoute = () => {
    switch (currentRoute) {
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "about":
        return <About />;
    }
  };

  return (
    <div className="dashboard-main-div">
      <NavBar setCurrentRoute={setCurrentRoute} />
      {displayRoute()}
    </div>
  );
}
