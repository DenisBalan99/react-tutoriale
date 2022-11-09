import { Box } from "@mui/system";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Navigate, Route, useNavigate } from "react-router-dom";
import Tutorial1 from "../tutoriale/tutorial1/tutorial1";
import ExpandingCards from "../tutoriale/udemy/expanding-cards/expandingCards";
import ProgressSteps from "../tutoriale/udemy/progress-steps/progress-steps";
import "./dashboard.css";

export default function Dashboard() {
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
  ];

  return (
    <div className="dashboardBody">
      <div className="dashboardDiv">
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
