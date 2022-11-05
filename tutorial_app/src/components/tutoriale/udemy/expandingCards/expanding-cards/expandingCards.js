import React, { Component, useEffect, useState } from "react";
import "./expandingCards.css";
import { Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

export default function ExpandingCards() {
  const panels = document.querySelectorAll(".panel");
  const [panelNo, setPanelNo] = useState(0);
  //   const history = useHistory();

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });

  //   useEffect(() => {
  //     setInterval(() => {
  //       removeActiveClasses();
  //       setPanelNo(panelNo + 1);
  //       if (panelNo > 4) {
  //         setPanelNo(0);
  //       }
  //       panels.forEach((panel, index) => {
  //         panel.addEventListener("click", () => {
  //           removeActiveClasses();
  //           setPanelNo(index);
  //         });

  //         if (index == panelNo) panel.classList.add("active");
  //       });
  //     }, 5000);
  //   });

  const removeActiveClasses = () => {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  };

  return (
    <div className="body" style={{ backgroundColor: "white" }}>
      {/* <Button className="backButton" onClick={() => history.goBack()}> */}
      <Button className="backButton">Back</Button>
      <div className="content">
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <h3>Explore The World</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <h3>Wild Forest</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
          }}
        >
          <h3>Sunny Beach</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
          }}
        >
          <h3>City on Winter</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <h3>Mountains - Clouds</h3>
        </div>
      </div>
    </div>
  );
}
