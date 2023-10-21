import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage"; // Import your components
import NP from "./file/NP";
import SUR from "./file/SUR"
import SPB from "./file/SPB"
import SPRR from "./file/SPRR"
import SPD from "./file/SPD"
import SUK from "./file/SUK"
import FormNP from "./form/FormNP";
import FormSPB from "./form/FormSPB";
import FormSPD from "./form/FormSPD";
import FormSPRR from "./form/FormSPRR";
import FormSUK from "./form/FormSUK";
import FormSUR from "./form/FormSUR";


function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/FormNP" element={<FormNP />} />
        <Route path="/FormSPB" element={<FormSPB />} />
        <Route path="/FormSPD" element={<FormSPD />} />
        <Route path="/FormSPRR" element={<FormSPRR />} />
        <Route path="/FormSUK" element={<FormSUK />} />
        <Route path="/FormSUR" element={<FormSUR />} />
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
