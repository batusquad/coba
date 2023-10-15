import React from "react";

const SPD = () => {
    return(
        <div>
            <div id="content">
                <div className="SPD-head">
                    <p type="text" placeholder="(Nama Perusahaan)" /> BATU
                </div>
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
                <div  className="spd">
                    <strong>
                        Surat Perjalanan Dinas (SPD)
                    </strong>
                </div>
                <div className="spd-main">
                <table className="table">
                    <tbody>
                        <tr>
                            1.
                            <td className="table-cell">Dokumen</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr>
                            2.
                            <td>Nama Pegawai</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr>
                            3.
                            <td>Jabatan</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr>
                            4.
                            <td>Maksud Perjalanan Dinas</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr>
                            5.
                            <td>Angkutan yang digunakan</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr>
                            6.
                            <td>Tempat Berangkat</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr>
                            7.
                            <td>Tempat Tujuan</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr>
                            8.
                            <td>Lama Perjalanan Dinas</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr>
                            9.
                            <td>Tanggal Berangkat</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr>
                            10.
                            <td>Tanggal Harus Kembali/Tiba di tempat baru</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr className="kotak">
                            11.
                            <td>Nama Anggota
                                <tr>
                                <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                <td><input type="text"/></td>
                                </tr>
                            </td>
                            <td>Tanggal lahir
                            <tr>
                                <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                <td><input type="text"/></td>
                                </tr>
                            </td>
                            <td>Keterangan
                                <tr>
                                <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                <td><input type="text"/></td>
                                </tr>
                            </td>
                        </tr>
                        <tr>
                            12.
                            <td>Divisi</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr>
                            13.
                            <td>Nomor Divisi</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                        <tr>
                            14.
                            <td>Keterangan Lain-Lain</td>
                            <td colSpan="2"><input className="spd-table" type="text" /></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
};

export default SPD;