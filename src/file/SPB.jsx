import React from "react";
import rock from "../assets/rock.svg"

const SPB = () => {
    return(

        <div id="content">
            <div className="sprr-1">
                <div className="sprr">
                    <img src={rock} className="rock" />
                    <div className="header-container">
                        <h1 className="batu">Surat Pengajuan Biaya</h1>
                        <input type="text" placeholder="Nama Kegiatan" />
                        <br/>
                        <input type="text" placeholder="Tanggal Kegiatan" />
                        <p>Tahun 2023</p>
                    </div>
                </div>
                <div className="spb-main">
                    <table>
                        <tr>
                            <td>Kode</td>
                            <td>Uraian</td>
                            <td>Vol</td>
                            <td>Satuan</td>
                            <td>Harga Satuan</td>
                            <td>Jumlah</td>
                        </tr>
                        <tr>
                            <td><input type="number" /></td>
                            <td><input type="number" /></td>
                            <td><input type="number" /></td>
                            <td><input type="number" /></td>
                            <td><input type="number" /></td>
                            <td><input type="number" /></td>
                        </tr>
                        <tr>
                            <td colSpan={5}>Total Biaya</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className="spb-foot">
                    <input className="tempat" type="text" placeholder="(Tempat),(Tanggal)"/>
                    <br/>
                    <br/>
                    <table>
                        <tr>
                            <td>Setuju Dibayar,</td>
                            <td>Mengetahui,</td>
                            <td>PIC, </td>
                            <td>Pemohon, </td>
                        </tr>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <tr>
                            <td><input type="text" placeholder="(Nama)"/></td>
                            <td><input type="text" placeholder="(Nama)"/></td>
                            <td><input type="text" placeholder="(Nama)"/></td>
                            <td><input type="text" placeholder="(Nama)"/></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SPB;