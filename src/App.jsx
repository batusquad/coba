import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage"; // Import your components
import NP from "./file/NP";
import SP from "./file/SP"
import SPB from "./file/SPB"
import SPRR from "./file/SPRR"
import SUD from "./file/SUD"
import SUK from "./file/SUK"


function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/NP" element={<NP />} />
        <Route path="/SP" element={<SP />} />
        <Route path="/SPB" element={<SPB />} />
        <Route path="/SPRR" element={<SPRR />} />
        <Route path="/SUD" element={<SUD />} />
        <Route path="/SUK" element={<SUK />} />
      </Routes>
  );
}

export default App;
