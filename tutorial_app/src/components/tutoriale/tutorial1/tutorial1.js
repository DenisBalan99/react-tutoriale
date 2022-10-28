import React, { Component } from "react";
import "./tutorial.css";

export default function Tutorial1() {
  return (
    <div className="main">
      <nav>
        <div className="logo">
          <img src="images/logo.png" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">Phone</a>
              <a href="#">Accessories</a>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
