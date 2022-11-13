import React, { Component } from "react";
import about from "../about.svg";
import home from "../home.svg";
import contact from "../email.svg";
import "./nav.css";
import { ReactSVG } from "react-svg";

export default function RotatingNav() {
  return (
    <nav>
      <ul>
        <li>
          {/* <img src={home} /> */}
          <ReactSVG id="svg-home" src={home} />
          Home
        </li>
        <li>
          {/* <img src={about} /> */}
          <ReactSVG id="svg-about" src={about} />
          About
        </li>
        <li>
          {/* <img src={contact} /> */}
          <ReactSVG id="svg-contact" src={contact} />
          Contact
        </li>
      </ul>
    </nav>
  );
}
