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
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "../src/page/Home"
import Sprrv from "./component/Sprrv";
import Spbv from "./component/Spbv";
import Spdv from "./component/Spdv";
import Sukv from "./component/Sukv";
import Surv from "./component/Surv";
import Npv from "./component/Npv";
import Lembarverif from "./file/Lembarverif";
import Layout from "./page/Layout";
import Dashboard from "./page/Dashboard";



function App() {
  return (
      <Routes>
        <Route path="/pra-usulan" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
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
        <Route path="/verifikator" element={<Home />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/sprrv" element={<Sprrv />} />
        <Route path="/spbv" element={<Spbv />} />
        <Route path="/spdv" element={<Spdv />} />
        <Route path="/sukv" element={<Sukv />} />
        <Route path="/surv" element={<Surv />} />
        <Route path="/Lembarverif" element={<Lembarverif />} />
        <Route path="/npv" element={<Npv />} />
      </Routes>
  );
}

export default App;
