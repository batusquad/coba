import React from "react";
import rock from "../assets/rock.svg"

const SPRR = () => {
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
            <div className="sprr-body">
                <p>YTH. : <input type="text" placeholder="..."/></p>
                <p>Dari : <input type="text" placeholder="..."/></p>
                <p>Hal : <input type="text" placeholder="..."/></p>
                <p>Lampiran : <input type="text" placeholder="..."/></p>
                <p>Tanggal : <input type="text" placeholder="..."/></p>
            </div>
            <hr/>
            <div className="sprr-main">
                <p> Bersama ini dengan hormat kami sampaikan bahwa (Nama Perusahaan) akan
                    melaksanakan rapat <input type="text" placeholder="..."/> sehubungan dengan hal tersebut kami mohon bantuan peminjaman
                    ruang rapat lantai <input type="text" placeholder="..."/> untuk keperluan acara tersebut pada:</p>

                    <p>Hari/Tanggal : <input type="text" placeholder="..."/></p>
                    <p>Waktu : <input type="text" placeholder="..."/></p>

                    <p>Demikian kami sampaikan, atas bantuan dan kerja sama yang baik kami haturkan terima
                    kasih. </p>
            </div>
            <div className="sprr-foot">
                <input type="text" placeholder="Nama Atasan" />
            </div>
        </div>
        </div>
    );
};

export default SPRR;