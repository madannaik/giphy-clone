import React from "react";
import { Route, Routes } from "react-router-dom";
import { GLoader } from "./components/GLoader";
import Navbar from "./layout/Navbar";
import { SeachBar } from "./layout/SeachBar";
import { TrendingGrid } from "./layout/TrendingGrid";
import "./styles/main.scss";

function App() {
  return (
    <div className="App" >
      <Navbar />
      <SeachBar />
      <Routes>
        <Route path="/" element={<TrendingGrid />} />
        <Route path="/:q" element={<TrendingGrid />} />
        <Route path="/load" element={<GLoader />} />
      </Routes>
    </div>
  );
}

export default App;
