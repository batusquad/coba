import React, {useState, useEffect} from 'react';
import axios from "axios"
import rock from "../assets/rock.svg"

const SPRR = () => {
    const [users,setUser] = useState([]);

    useEffect(() =>{
        getUsers();
    },[]);
    const getUsers = async () =>{
        const response = await axios.get('http://localhost:5014/sprr');
        setUser(response.data)
    }

    return(
        <div id="content">
        <div className="sprr-1">
            <div className="sprr">
                <img src={rock} className="rock" />
                <div className="header-container">
                    <h1 className="batu">Batu Coorporation</h1>
                    <p>Bikini Bottom</p>
                </div>
            </div>
            <div className="sprr-head">
                <strong>Surat Peminjaman Ruang Rapat</strong>
                <div>
                <strong>Nomor : <input type="text" placeholder="..." /></strong>
                </div>
            </div>
            {users.map((user,index)=> (
                <div className="sprr-body" key={user.id}>
                    <p>YTH. : {user.yth} </p>
                    <p>Dari : {user.dari}</p>
                    <p>Hal : {user.hal}</p>
                    <p>Lampiran : {user.lampiran}</p>
                    <p>Tanggal : {user.tanggal}</p>
                </div>
            ))}
            <hr/>
            {users.map((user,index)=> (
            <div className="sprr-main">
                <p> Bersama ini dengan hormat kami sampaikan bahwa divisi {user.divisi} akan
                    melaksanakan rapat {user.rapat} sehubungan dengan hal tersebut kami mohon bantuan peminjaman
                    ruang rapat lantai {user.lantai} untuk keperluan acara tersebut pada:</p>

                    <p>Hari/Tanggal : {user.hari}, {user.tanggalrapat}</p>
                    <p>Waktu : {user.waktu}</p>

                    <p>Demikian kami sampaikan, atas bantuan dan kerja sama yang baik kami haturkan terima
                    kasih. </p>   
            </div>
            ))}
            <div className="sprr-foot">
                <input type="text" placeholder="Nama Atasan" />
            </div>
        </div>
        </div>
    );
};

export default SPRR;