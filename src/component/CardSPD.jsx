import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { AiOutlineFilePdf } from "react-icons/ai";


const CardSPD = ({ title, link }) => {
  const navigate = useNavigate(); // Initialize the navigation function using useNavigate

  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{title}</div>
              <button onClick={() => navigate("/FormSPD")} className="btn btn-primary klik">DOC</button>
            </div>
            <div className="col-auto ">
              <AiOutlineFilePdf/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSPD;
