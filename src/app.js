import React from "react";
import { DashBoard } from "./pages/dashBoard.tsx";
import { Route, Routes } from "react-router-dom";
import './style.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
