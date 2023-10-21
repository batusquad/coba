import React, {useState, useEffect} from 'react';
import axios from "axios"
import rock from "../assets/rock.svg"

const SUK = () => {
    const [users,setUser] = useState([]);

    useEffect(() =>{
        getUsers();
    },[]);
    const getUsers = async () =>{
        const response = await axios.get('http://localhost:5014/suk');
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
                <strong>Surat Usulan Kegiatan</strong>
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
                <p>Dalam rangka {user.rangka}, {user.dvisi} akan melaksanakan kegiatan {user.kegiatan}</p>

                    <p>Sehubungan dengan hal tersebut, dengan ini kami mengajukan permohonan
                    pelaksanaan kegiatan dimaksud yang akan dilaksanakan pada {user.hari}, {user.tanggalkegiatan}</p>

                    <p>Demikian hal ini disampaikan, atas perhatiannya dihaturkan terima kasih.</p>
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
    );
};

export default SUK;