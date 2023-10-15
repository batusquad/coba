import React from "react";
import rock from "../assets/rock.svg"

const SUK = () => {
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
            <div className="sprr-body">
                <p>YTH. : <input type="text" placeholder="..."/></p>
                <p>Dari : <input type="text" placeholder="..."/></p>
                <p>Hal : <input type="text" placeholder="..."/></p>
                <p>Lampiran : <input type="text" placeholder="..."/></p>
                <p>Tanggal : <input type="text" placeholder="..."/></p>
            </div>
            <hr/>
            <div className="sprr-main">
                <p>Dalam rangka <input type="text" placeholder="..."/>, (Divisi) akan melaksanakan kegiatan <input type="text" placeholder="..."/></p>

                    <p>Sehubungan dengan hal tersebut, dengan ini kami mengajukan permohonan
                    pelaksanaan kegiatan dimaksud yang akan dilaksanakan pada <input type="text" placeholder="..."/></p>

                    <p>Demikian hal ini disampaikan, atas perhatiannya dihaturkan terima kasih.</p>
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

export default SUK;