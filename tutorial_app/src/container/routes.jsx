import React, { Component } from "react";
import Projects from "../components/projects/projects";
import ProgressSteps from "../components/tutoriale/udemy/2-progress-steps/progress-steps";
import ExpandingCards from "../components/tutoriale/udemy/1-expanding-cards/expandingCards";
import RotatingNavigation from "../components/tutoriale/udemy/3-rotating-navigation/rotatingNavigation";
import HiddenSearch from "../components/tutoriale/udemy/4-hidden-search/hidden-search";
import BlurryLoading from "../components/tutoriale/udemy/5-blurry-loading/blurry-loading";
import About from "../components/about/about";
import Contact from "../components/contact/contact";

export const appRoutes = [
  { paths: "/", element: <Projects /> },
  { paths: "/projects", element: <Projects /> },
  { paths: "/about", element: <About /> },
  { paths: "/contact", element: <Contact /> },
  { paths: "/progress-steps", element: <ProgressSteps /> },
  { paths: "/expanding-cards", element: <ExpandingCards /> },
  { paths: "/rotating-navigation", element: <RotatingNavigation /> },
  { paths: "/hidden-search", element: <HiddenSearch /> },
  { paths: "/blurry-loading", element: <BlurryLoading /> },
];
