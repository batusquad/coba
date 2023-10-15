import React from "react";
import rock from "../assets/rock.svg"


const SUR = () => {
    return(
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
            <div className="sur-head">
                <strong><input type="text" placeholder="(Tanggal)" /></strong>
            </div> 
            <div className="sprr-body">
                <p>Nomor : <input type="text" placeholder="..."/></p>
                <p>Sifat : <input type="text" placeholder="..."/></p>
                <p>Hal : <input type="text" placeholder="..."/></p>
                <p>Lampiran : <input type="text" placeholder="..."/></p>
            </div>
            <br/>
            <div className="sprr-main">
                <p>Dalam rangka program <input type="text" placeholder="..."/>, (Divisi) akan melaksanakan <input type="text" placeholder="..." /> pada: :</p>
                <br/>
                    <p>Hari/Tanggal : <input type="text" placeholder="..."/></p>
                    <p>Waktu : <input type="text" placeholder="..."/></p>
                    <p>Tempat : <input type="text" placeholder="..."/></p>
                    <p>Acara : <input type="text" placeholder="..."/></p>
                <br/>
                    <p>Sehubungan dengan hal tersebut, kami mohon dengan hormat kesediaan Bapak/Ibu
                    untuk dapat hadir dalam kegiatan dimaksud sebagai peserta.</p>
                    <p>Demikian disampaikan, atas perhatian dan kerja samanya dihaturkan terima kasih.</p>
            </div>
            <div className="sprr-foot">
                <p>Direktur, </p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <input type="text" placeholder="Nama Atasan" />
            </div>
            </div>
        </div>
    );
};

export default SUR;