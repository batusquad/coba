import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage"; // Import your components
import NP from "./file/NP";
import SUR from "./file/SUR"
import SPB from "./file/SPB"
import SPRR from "./file/SPRR"
import SPD from "./file/SPD"
import SUK from "./file/SUK"


function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/NP" element={<NP />} />
        <Route path="/SUR" element={<SUR />} />
        <Route path="/SPB" element={<SPB />} />
        <Route path="/SPRR" element={<SPRR />} />
        <Route path="/SPD" element={<SPD />} />
        <Route path="/SUK" element={<SUK />} />
      </Routes>
  );
}

export default App;
