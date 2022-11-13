import React, { Component, useEffect } from "react";
import "./rotatingNavigation.css";
import { Button } from "react-bootstrap";
import close_svg from "./close.svg";
import bars from "./bars.svg";
import RotatingNav from "./nav/nav";
import { ReactSVG } from "react-svg";

export default function RotatingNavigation() {
  let circle_class = null;
  let rotating_main_div = null;

  function closeEvent() {
    // rotating_main_div = document.querySelector(".circle-class");
    rotating_main_div.classList.remove("show-nav");
    circle_class.classList.remove("show-nav");
  }
  function openEvent() {
    // rotating_main_div = document.querySelector(".circle-class");
    rotating_main_div.classList.add("show-nav");
    circle_class.classList.add("show-nav");
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    circle_class = document.querySelector(".circle-class");
    rotating_main_div = document.querySelector(".rotating-main-div");
  });

  return (
    <div className="rotating-main-body">
      <div className="rotating-main-div">
        <div className="circle-container">
          <div className="circle-class">
            <Button
              className="btn-class"
              id="close"
              onClick={() => closeEvent()}
            >
              <ReactSVG src={close_svg} />
            </Button>
            <Button className="btn-class" id="open" onClick={() => openEvent()}>
              <ReactSVG src={bars} />
            </Button>
          </div>
        </div>

        <div className="page-content">
          <h1>Amazing article</h1>
          <small>Black holes</small>
          <p>
            Black holes are regions in space where an enormous amount of mass is
            packed into a tiny volume. This creates a gravitational pull so
            strong that not even light can escape. They are created when giant
            stars collapse, and perhaps by other methods that are still unknown.
            Black holes fascinate both the public and scientists—they push the
            limits of our understanding about matter, space and time. Scientists
            at the University of Chicago and across the world have made many
            discoveries about our universe with the help of black holes, but
            there’s a lot we still don’t know about these extraordinary cosmic
            phenomena.
          </p>
          <h3>What is a black hole?</h3>
          <div className="img-class">
            <img src="https://news.uchicago.edu/sites/default/files/styles/tablet_landscape/public/images/2022-10/sgr%20A%2A%20ESO%20and%20M.%20Kornmesser%20690.jpg?itok=751LLg5w"></img>
          </div>
          <p>
            Black holes are made of matter packed so tightly that gravity
            overwhelms all other forces. When you pick up a bowling ball, it’s
            heavy because the matter is densely packed. If you packed more and
            more mass into the same tiny space, eventually it would create
            gravity so strong that it would exert a significant pull on passing
            rays of light. Black holes are created when massive stars collapse
            at the end of their lives (and perhaps under other circumstances
            that we don’t know about yet.) One of the first steps toward the
            discovery of black holes was made by University of Chicago Professor
            and Nobel laureate Subrahmanyan Chandrasekhar, when he realized that
            massive stars would have to collapse after they ran out of fuel for
            the fusion reactions which keep them hot and bright.
          </p>
        </div>
      </div>
      <RotatingNav />
    </div>
  );
}
