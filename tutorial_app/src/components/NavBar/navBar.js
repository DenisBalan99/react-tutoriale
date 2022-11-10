import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { PureComponent, useEffect, useState } from "react";
import "./navBar.css";

export default function NavBar(props) {
  const { menuItems, logo, setCurrentRoute } = props;
  const [buttonPressedChange, setButtonPressedChange] = useState(false);
  let buttons_bar = null;

  const mockMenuItems = [
    { label: "About", url: "about" },
    { label: "Contact", url: "contact" },
    { label: "Projects", url: "projects" },
  ];

  function setButtonActive(index) {
    unsetButtonActive();
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
                setCurrentRoute(item.url);
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
