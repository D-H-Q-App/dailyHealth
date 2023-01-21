import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
// import Questions from "./components/Questions";
import HomePage from "./pages/Home";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          {/* <Route path="/questions" element={<Questions />} /> */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Root;
