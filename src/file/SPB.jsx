import React, {useState, useEffect} from "react";
import axios from "axios";
import rock from "../assets/rock.svg"
import Layout from "../page/Layout";

const SPB = () => {
    const [spbData, setSPBData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Ambil data SPB
    axios.get("http://localhost:5014/spb")
      .then((response) => {
        setSPBData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching SPB data:", error);
      });

    // Ambil data users
    axios.get("http://localhost:5014/users")
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users data:", error);
      });
  }, []);


    return(
        <Layout>
        <div id="content">
            <div className="sprr-1">
                <div className="sprr">
                    <img src={rock} className="rock" />
                    {usersData.map((user,index)=> (
                    <div className="header-container" key={user.id}>
                        <h1 className="batu">Surat Pengajuan Biaya</h1>
                        <p>{user.namakegiatan}</p>
                        <p>{user.tanggalkegiatan}</p>
                        <p>Tahun 2023</p>
                    </div>
                    ))}
                </div>
                <div className="spb-main">
                    <table>
                        <thead>
                            <tr>
                                <td>Kode</td>
                                <td>Uraian</td>
                                <td>Vol</td>
                                <td>Satuan</td>
                                <td>Harga Satuan</td>
                                <td>Jumlah</td>
                            </tr>
                        </thead>
                        <tbody>
                        {spbData.map((spb,index)=> (
                            <tr key={spb.id}>
                                    <td>{index+1}</td>
                                    <td>{spb.uraian}</td>
                                    <td>{spb.vol}</td>
                                    <td>{spb.satuan}</td>
                                    <td>{spb.hargasatuan}</td>
                                    <td>{spb.jumlah}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>Total Biaya</td>
                            <td></td>
                        </tr>
                     </tfoot>
                    </table>
                </div>
                <div className="spb-foot">
                    <input className="tempat" type="text" placeholder="(Tempat),(Tanggal)"/>
                    <br/>
                    <br/>
                    <table>
                        <thead>
                        <tr>
                            <td>Setuju Dibayar,</td>
                            <td>Mengetahui,</td>
                            <td>PIC, </td>
                            <td>Pemohon, </td>
                        </tr>
                        </thead>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <tbody>
                        <tr>
                            <td><input type="text" placeholder="(Nama)"/></td>
                            <td><input type="text" placeholder="(Nama)"/></td>
                            <td><input type="text" placeholder="(Nama)"/></td>
                            <td><input type="text" placeholder="(Nama)"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default SPB;