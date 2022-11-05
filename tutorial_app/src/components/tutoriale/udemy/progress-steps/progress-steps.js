import React, { Component, useEffect, useState } from "react";
import "./progress-steps.css";

export default function ProgressSteps() {
  let circles = null;
  let progressBar = null;
  let prevButton = null;
  let nextButton = null;
  const [currentActive, setCurrentActive] = useState(1);

  const [progressWidth, setProgressWidth] = useState(5);

  useEffect(() => {
    circles = document.querySelectorAll(".circle");
    progressBar = document.getElementById("progress");
    prevButton = document.getElementById("prev");
    nextButton = document.getElementById("next");
  });

  useEffect(() => {
    updateProgress();
  }, [currentActive]);

  function updateProgress() {
    circles.forEach((circle, idx) => {
      if (idx < currentActive) {
        circle.classList.add("active");
        return;
      }

      circle.classList.remove("active");
    });

    const actives = document.querySelectorAll(".active");

    progressBar.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 95 + "%";

    if (actives.length > 1) {
      prevButton.disabled = false;
    } else {
      prevButton.disabled = true;
    }

    if (actives.length === circles.length) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }

  function handleNextEvent() {
    if (currentActive + 1 > circles.length) {
      setCurrentActive(circles.length);
    } else {
      setCurrentActive(currentActive + 1);
    }
  }

  function handlePrevEvent() {
    if (currentActive - 1 < 1) {
      setCurrentActive(1);
    } else {
      setCurrentActive(currentActive - 1);
    }
  }

  return (
    <div className="mainBody">
      <div className="mainDiv">
        <div className="progress-container">
          <div className="progress" id="progress"></div>
          <div className="circle active">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
        </div>
        <button
          className="btn"
          id="prev"
          //   disabled={true}
          onClick={() => handlePrevEvent()}
        >
          Prev
        </button>
        <button className="btn" id="next" onClick={() => handleNextEvent()}>
          Next
        </button>
      </div>
    </div>
  );
}
