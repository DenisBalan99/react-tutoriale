import React, { useEffect, useState } from "react";
import { scale } from "../../../../utils/custom-scale";
import "./blurry-loading.css";

export default function BlurryLoading() {
  let bg_class,
    loading_class = null;
  const interval = null;
  let per = 0;

  function getClasses() {
    bg_class = document.querySelector(".bg");
    loading_class = document.querySelector(".loading-text");
  }

  function handlePercentageChange() {
    per++;
    bg_class.style.filter = `blur(${scale(per, 0, 100, 30, 0)}px)`;
    loading_class.innerText = `${per}%`;
    loading_class.style.opacity = 1 - per / 100;
    if (per === 100) clearInterval(interval);
  }

  useEffect(() => {
    getClasses();
    setInterval(() => handlePercentageChange(), 20);
    handlePercentageChange();
    return () => clearInterval(interval);
  });

  return (
    <div className="blurry-main-div">
      <section className="bg"></section>
      <div className="loading-text">0%</div>
    </div>
  );
}
