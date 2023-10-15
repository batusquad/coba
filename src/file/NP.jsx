import React from "react";
import "../style/Card.css"

const NP = () => {
  return (
    <div>
      <div id="content">
        <div className="np-head">
          <p>
            Lampiran I : <input type="text" placeholder="..." />
          </p>
          <p>
            Nomor : <input type="text" placeholder="..." />
          </p>
          <p>
            Tanggal : <input type="text" placeholder="..." />
          </p>
        </div>
        <div className="np-title">
          <strong>NARASUMBER/PEMBICARA</strong>
          <br />
          <input type="text" placeholder="(NAMA KEGIATAN)" />
          <br />
          <input type="text" placeholder="(TANGGAL KEGIATAN)" />
        </div>
        <div className="np-main">
          <table className="table" width="10%">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>Besar Honorarium</th>
                <th>Pajak</th>
                <th>Transport</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="np-foot">
          <p>Direktur, </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <input type="text" placeholder="Tanda Tangan" />
          <br />
          <input type="text" placeholder="Nama" />
        </div>
      </div>
      <button id="btn-one" className="submit btn btn-success btn-lg">
        Print
      </button>
      <iframe
        id="frame"
        style={{ width: "100%", border: "0", height: "0" }}
        src="/NP"
      ></iframe>
      {/* Your script imports */}
    </div>
  );
};

export default NP;
