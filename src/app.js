import React from "react";
import DashBoard  from "./pages/dashBoard.tsx";
import { Route, Routes } from "react-router-dom";
import './style.css'
import { MainPage } from "./pages/mainPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
