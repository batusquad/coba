import React from 'react'
import rock from "../assets/rock.svg"
import "../style/Lembarverif.css"
import Layout from '../page/Layout'


const Lembarverif = () => {
  return (
    <Layout>
        <div className="lv">
            <div className="lv-1">
                <img src={rock} className="rock" />
                <div className="header-container">
                    <h4 className="batu">Batu Coorporation</h4>
                    <h5 className="batu">Pulau Bikini Buttom Jl. Jellyfish No.1</h5>
                    <h5 className="batu">0896-8291-2155</h5>
                    <br/>
                    <br/>
                    <div className="isi">
                        <h5>LEMBAR VERIFIKASI DOKUMEN USULAN PELAKSANAAN KEGIATAN/PENGAJUAN BIAYA KEGIATAN</h5>
                    </div>
                </div>
            </div>
            <br/>
            <div className="isi2">
                <p>Divisi :       
                <input className="input1"></input>
                </p>
            </div>
            <div className="isi2">
                <p>Nama Kegiatan :       
                <input className="input2"></input>
                </p>
            </div>
            <br/>
            <div className="tabel1">
                <thead>
                    <tr>
                        <th rowSpan={"2"}>No</th>
                        <th rowSpan={"2"}>Keterangan Dokumen</th>
                        <th colSpan={"2"}>Bukti</th>
                        <th rowSpan={"2"}>Keterangan</th>
                    </tr>
                    <tr>
                        <td width={"16%"}>Ada</td>
                        <td>Tidak Ada</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1.</td>
                    <td className="surat">Surat Usulan Kegiatan</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td className="surat">Surat Pengajuan Anggaran</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td className="surat">Surat Perjalanan Dinas</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>4.</td>
                    <td className="surat">Surat Peminjaman Ruang Rapat</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>5.</td>
                    <td className="surat">Surat Undangan Rapat</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>6.</td>
                    <td className="surat">Bukti Laporan Transport</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className="surat" colSpan={"4"}>Catatan Bagian Keuangan</td>
                        <td rowSpan={"2"}>Barcode</td>
                    </tr>
                    <tr>
                        <td colSpan={"4"}><textarea cols="100" rows="3"></textarea></td>
                    </tr>
                    <tr>
                        <td className="surat" colSpan={"4"}>Catatan Direktur</td>
                        <td rowSpan={"2"}>Tanda Tangan Digital</td>
                    </tr>
                    <tr>
                        <td colSpan={"4"}><textarea cols="100" rows="3"></textarea></td>
                    </tr>

                </tfoot>
            </div>
        </div>
        </Layout>
  )
}

export default Lembarverif
