import React, { Component, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./hidden-search.css";
import { ReactSVG } from "react-svg";
import search_svg from "./search.svg";

export default function HiddenSearch() {
  let btn = null;

  function onClickBtn() {
    if (btn.classList.contains("active")) btn.classList.remove("active");
    else btn.classList.add("active");
  }

  useEffect(() => {
    btn = document.querySelector(".search");
  });

  return (
    <div className="hidden-search-container">
      <h2>Press on the search button</h2>
      <div className="search">
        <input type="text" className="input" placeholder="Search..."></input>
        <Button className="search-btn" onClick={() => onClickBtn()}>
          <ReactSVG id="search-svg" src={search_svg} />
        </Button>
      </div>
    </div>
  );
}
