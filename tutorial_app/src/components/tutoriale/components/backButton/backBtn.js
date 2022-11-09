import { Box } from "@mui/material";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./backBtn.css";

export default function BackButton() {
  let navigate = useNavigate();

  return (
    <Box className="boxButton">
      <Button className="backButton" onClick={() => navigate("/")}>
        Back
      </Button>
    </Box>
  );
}
