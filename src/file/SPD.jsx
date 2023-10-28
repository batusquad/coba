import React, {useState, useEffect} from "react";
import axios from "axios";
import Layout from "../page/Layout";

const SPD = () => {

    const [spb,setSPB] = useState([]);

    useEffect(() =>{
        getSPB();
    },[]);
    const getSPB = async () =>{
        try{
        const response = await axios.get('http://localhost:5014/spd');
        setSPB(response.data)
        }catch (error) {
            console.error("Kesalahan saat mengambil data dari server:", error);
        }
    }

    return(
        <Layout>
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
                {spb.map((user,index)=> (
                    <tbody key={user.id}>
                        <tr>
                            1.
                            <td className="table-cell">Dokumen</td>
                            <td colSpan="2">{user.dokumen}</td>
                        </tr>
                        <tr>
                            2.
                            <td>Nama Pegawai</td>
                            <td colSpan="2">{user.namapegawai}</td>
                        </tr>
                        <tr>
                            3.
                            <td>Jabatan</td>
                            <td colSpan="2">{user.jabatan}</td>
                        </tr>
                        <tr>
                            4.
                            <td>Maksud Perjalanan Dinas</td>
                            <td colSpan="2">{user.maksudperjalanandinas}</td>
                        </tr>
                        <tr>
                            5.
                            <td>Angkutan yang digunakan</td>
                            <td colSpan="2">{user.angkutan}</td>
                        </tr>
                        <tr>
                            6.
                            <td>Tempat Berangkat</td>
                            <td colSpan="2">{user.tempatberangkat}</td>
                        </tr>
                        <tr>
                            7.
                            <td>Tempat Tujuan</td>
                            <td colSpan="2">{user.tujuan}</td>
                        </tr>
                        <tr>
                            8.
                            <td>Lama Perjalanan Dinas</td>
                            <td colSpan="2">{user.estimasiwaktu}</td>
                        </tr>
                        <tr>
                            9.
                            <td>Tanggal Berangkat</td>
                            <td colSpan="2">{user.tanggalberangkat}</td>
                        </tr>
                        <tr>
                            10.
                            <td>Tanggal Harus Kembali/Tiba di tempat baru</td>
                            <td colSpan="2">{user.tanggalharuskembali}</td>
                        </tr>
                        <tr className="kotak">
                            11.
                            <td>Nama Anggota
                                <tr>
                                <td>{user.namaanggota}</td>
                                </tr>
                                <tr>
                                <td>{user.namaanggota1}</td>
                                </tr>
                            </td>
                            <td>Tanggal lahir
                            <tr>
                                <td>{user.tanggallahir}</td>
                                </tr>
                                <tr>
                                <td>{user.tanggallahir1}</td>
                                </tr>
                            </td>
                            <td>Keterangan
                                <tr>
                                <td>{user.keterangan}</td>
                                </tr>
                                <tr>
                                <td>{user.keterangan1}</td>
                                </tr>
                            </td>
                        </tr>
                        <tr>
                            12.
                            <td>Divisi</td>
                            <td colSpan="2">{user.divisi}</td>
                        </tr>
                        <tr>
                            13.
                            <td>Nomor Divisi</td>
                            <td colSpan="2">{user.nomordivisi}</td>
                        </tr>
                        <tr>
                            14.
                            <td>Keterangan Lain-Lain</td>
                            <td colSpan="2">{user.ketlainlain}</td>
                        </tr>
                    </tbody>
                    ))}
                </table>
                </div>
            </div>
        </div>
        </Layout>
    )
};

export default SPD;