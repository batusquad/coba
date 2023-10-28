import React from 'react'
import "../style/Sur.css"
import { useNavigate } from 'react-router-dom';
import Layout from '../page/Layout';

const Surv = () => {
  const navigate = useNavigate();

  return (
    <Layout>
    <div className="containers">
      <h1 className="title">Acc Request Surat Undangan Rapat</h1>
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
            <td>dede tambunan</td>
            <td>
              <input type="checkbox" className="checkbox" />
            </td>
          </tr>
          <tr>
            <td>2023-10-21</td>
            <td>rio miranda leva</td>
            <td>
              <input type="checkbox" className="checkbox" />
            </td>
          </tr>
          <tr>
            <td>2023-10-22</td>
            <td>aniq mursidayanti</td>
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
    </Layout>
  );
}

export default Surv
