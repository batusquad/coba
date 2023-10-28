import React, {useState, useEffect} from "react";
import axios from "axios";
import rock from "../assets/rock.svg"

const SPB = () => {
    const [users,setUser] = useState([]);

    useEffect(() =>{
        getUsers();
    },[]);
    const getUsers = async () =>{
        const response = await axios.get('http://localhost:5014/spb');
        setUser(response.data)
    }
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
                        {users.map((user,index)=> (
                            <tr key={user.id}>
                                    <td>{index+1}</td>
                                    <td>{user.uraian}</td>
                                    <td>{user.vol}</td>
                                    <td>{user.satuan}</td>
                                    <td>{user.hargasatuan}</td>
                                    <td>{user.jumlah}</td>
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
    );
};

export default SPB;