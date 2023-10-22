import React from 'react'
import "../style/Spd.css"
import { useNavigate } from 'react-router-dom';

const Spd = () => {
  const navigate = useNavigate();

  return (
    <div className="containers">
      <h1 className="title">Acc Request Surat Perjalanan Dinas</h1>
      <table responsive bordered hover className="custom-table">
        <thead>
          <tr>
            <th>Tanggal Request</th>
            <th>Nama Lengkap</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023-10-20</td>
            <td>Bambang</td>
            <td>
              <input type="checkbox" className="checkbox" />
            </td>
          </tr>
          <tr>
            <td>2023-10-21</td>
            <td>Asep Knalpot</td>
            <td>
              <input type="checkbox" className="checkbox" />
            </td>
          </tr>
          <tr>
            <td>2023-10-22</td>
            <td>Nurmansyah gay</td>
            <td>
              <input type="checkbox" className="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-center mt-3">
        <button onClick={() => navigate("/Home")} className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
;}

export default Spd