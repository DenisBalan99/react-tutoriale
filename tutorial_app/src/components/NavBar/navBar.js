import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { PureComponent, useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import "./navBar.css";

export default function NavBar(props) {
  const navigate = useNavigate();
  const [buttonPressedChange, setButtonPressedChange] = useState(false);
  const [currentActiveButton, setCurrentActiveButton] = useState(2);
  let buttons_bar = null;

  const mockMenuItems = [
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Projects", url: "/projects" },
  ];

  function setButtonActive(index) {
    unsetButtonActive();
    setCurrentActiveButton(index);
    buttons_bar[index].classList.add("active");
    setButtonPressedChange(!buttonPressedChange);
  }

  function unsetButtonActive() {
    buttons_bar.forEach((button_bar) => {
      button_bar.classList.remove("active");
    });
  }

  useEffect(() => {
    buttons_bar = document.querySelectorAll(".button-hover-bar");
  });

  return (
    <div className="nav-bar-main-div">
      <div className="navBar">
        {mockMenuItems.map((item, index) => (
          <React.Fragment key={index}>
            <Button
              onClick={() => {
                navigate(item.url);
                setButtonActive(index);
              }}
            >
              {item.label}
              <div className="button-hover-bar"></div>
            </Button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
