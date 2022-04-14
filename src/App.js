import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { SeachBar } from "./layout/SeachBar";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SeachBar />
      <Routes>
        <Route path="/" element={<div></div>} />
      </Routes>
    </div>
  );
}

export default App;
