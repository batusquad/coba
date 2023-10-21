import React from "react";
import CardNP from "../component/CardNP";
import CardSUR from "../component/CardSUR";
import CardSPB from "../component/CardSPB";
import CardSPRR from "../component/CardSPRR";
import CardSPD from "../component/CardSPD";
import CardSUK from "../component/CardSUK";
import SideBar from "../component/SideBar";
import '../style/App.css'
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Document</h1>
          </div>
          <div className="row">
            <CardNP title="Nota Pembicara"  /> {/* Use NP component as JSX element */}
            <CardSPRR title="Surat Peminjaman Ruang Rapat" />
            <CardSPB title="Surat Pengajuan Biaya" />
            <CardSUR title="Surat Undangan Rapat" />
            <CardSUK title="Surat Usulan Kegiatan" />
            <CardSPD title="Surat Perjalanan Dinas" />
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    );
};

export default MainPage;
