import React from "react";
import NavBar from "./components/NavBar/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "./container/routes";

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {appRoutes.map((obj, index) => {
            return <Route key={index} path={obj.paths} element={obj.element} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
