import React, {useState}from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Questions from "./components/Questions";
import HomePage from "./pages/Home";
import AboutUs  from "./pages/AboutUs"
import AboutAyurveda from "./pages/AboutAyurveda";
import MetabolicType from "./pages/MetabolicType";
import ResultList from "./components/ResultList";

const Root = () => {

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/questions" element={<Questions />} />
          <Route path="/results" element={<ResultList/>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aboutayurveda" element={<AboutAyurveda />} />
          <Route path="/metabolictype" element={<MetabolicType/>} />
        </Routes>
      </main>
    </div>
  );
};

export default Root;
