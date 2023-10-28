import React, {useState, useEffect} from 'react';
import axios from "axios"   
import rock from "../assets/rock.svg"
import Layout from "../page/Layout.jsx"


const SUR = () => {
    const [users,setUser] = useState([]);

    useEffect(() =>{
        getUsers();
    },[]);
    const getUsers = async () =>{
        const response = await axios.get('http://localhost:5014/sur');
        setUser(response.data)
    }

    return(
        <Layout>
        <div id="content">
            <div className="sprr-1">
            <div className="sprr">
                <img src={rock} className="rock" />
                <div className="header-container">
                    <h1 className="batu">Batu Coorporation</h1>
                    <p>Bikini Bottom</p>
                    <p>085896375612</p>
                </div>
            </div>
            {users.map((user,index)=> (
            <div className="sur-head">
                <strong>{user.tanggal}</strong>
            </div> 
            ))}
            {users.map((user,index)=> (
            <div className="sprr-body">
                <p>Nomor : {user.nomor}</p>
                <p>Sifat : {user.sifat}</p>
                <p>Hal : {user.hal}</p>
                <p>Lampiran : {user.lampiran}</p>
            </div>
            ))}
            <br/>
            {users.map((user,index)=> (
            <div className="sprr-main">
                <p>Dalam rangka program {user.program}, (Divisi) akan melaksanakan {user.melaksanakan} pada: :</p>
                <br/>
                    <p>Hari/Tanggal : {user.hari}, {user.tanggalkegiatan}</p>
                    <p>Waktu : {user.waktu}</p>
                    <p>Tempat : {user.tempat}</p>
                    <p>Acara : {user.acara}</p>
                <br/>
                    <p>Sehubungan dengan hal tersebut, kami mohon dengan hormat kesediaan Bapak/Ibu
                    untuk dapat hadir dalam kegiatan dimaksud sebagai peserta.</p>
                    <p>Demikian disampaikan, atas perhatian dan kerja samanya dihaturkan terima kasih.</p>
            </div>
            ))}
            {users.map((user,index)=> (
            <div className="sprr-foot">
                <p>Direktur, </p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {user.atasan}
            </div>
            ))}
            </div>
        </div>
        </Layout>
    );
};

export default SUR;