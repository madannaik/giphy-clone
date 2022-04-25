import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { SeachBar } from "./layout/SeachBar";
import { SearchPage } from "./pages/SearchPage";
import { TrendingGridPage } from "./pages/TrendingGifPage";
import "./styles/main.scss";

function App() {
  return (
    <div className="App" >
      <Navbar />
      <SeachBar />
      <Routes >
        <Route path="/" element={<TrendingGridPage />} />
        <Route path="search/" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
