import { Box } from "@mui/system";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Navigate, Route, useNavigate } from "react-router-dom";
import "./projects.css";

export default function Projects() {
  let navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }

  const navigateRoutes = [
    {
      path: "/expanding-cards",
      content: "Expanding cards",
    },
    {
      path: "/progress-steps",
      content: "Progress steps",
    },
    {
      path: "/rotating-navigation",
      content: "Rotating navigation",
    },
    {
      path: "/hidden-search",
      content: "Hidden search",
    },
    {
      path: "/blurry-loading",
      content: "Blurry loading",
    },
  ];

  return (
    <div className="projectsBody">
      <div className="projectsDiv">
        <h2>Choose a project</h2>
        <h3>{navigateRoutes.length} projects</h3>
        {navigateRoutes.map((route, index) => (
          <Button
            key={index}
            className="boxClass"
            onClick={() => navigateTo(route.path)}
          >
            <div className="boxContent">{route.content}</div>
          </Button>
        ))}
      </div>
    </div>
  );
}
