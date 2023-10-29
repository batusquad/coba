import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Layout from '../page/Layout'

const FormNP = () => {
    const [yth, setYth] = useState("")
    const [dari, setDari] = useState("")
    const [hal, setHal] = useState("")
    const [lampiran, setLampiran] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [divisi, setDivisi] = useState("")
    const [rapat, setRapat] = useState("")
    const [lantai, setLantai] = useState("")
    const [hari, setHari] = useState("")
    const [tanggalrapat, setTanggalrapat] = useState("")
    const [waktu, setWaktu] = useState("")
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5014/sprr',{
                yth,
                dari,
                hal,
                lampiran,
                tanggal,
                divisi,
                rapat,
                lantai,
                hari,
                tanggalrapat,
                waktu

            });
            navigate("/SPRR")
        } catch (error){
            console.log(error);
        }
    }


  return (
    <Layout>
    <div>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className="field">
                    <label className="label">YTH</label>
                    <div className="control">
                        <input type="text" className="input" value={yth} onChange={(e => setYth(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Dari</label>
                    <div className="control">
                        <input type="text" className="input" value={dari} onChange={(e => setDari(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Hal</label>
                    <div className="control">
                        <input type="text" className="input" value={hal} onChange={(e => setHal(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Lampiran</label>
                    <div className="control">
                        <input type="text" className="input" value={lampiran} onChange={(e => setLampiran(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tanggal</label>
                    <div className="control">
                        <input type="text" className="input" value={tanggal} onChange={(e => setTanggal(e.target.value))} placeholder='YYYY-MM-DD'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Divisi</label>
                    <div className="control">
                        <input type="text" className="input" value={divisi} onChange={(e => setDivisi(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Rapat</label>
                    <div className="control">
                        <input type="text" className="input" value={rapat} onChange={(e => setRapat(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">lantai</label>
                    <div className="control">
                        <input type="text" className="input" value={lantai} onChange={(e => setLantai(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Hari</label>
                    <div className="control">
                        <input type="text" className="input" value={hari} onChange={(e => setHari(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tanggal Rapat</label>
                    <div className="control">
                        <input type="text" className="input" value={tanggalrapat} onChange={(e => setTanggalrapat(e.target.value))} placeholder='YYYY-MM-DD'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">waktu</label>
                    <div className="control">
                        <input type="text" className="input" value={waktu} onChange={(e => setWaktu(e.target.value))} placeholder='HH:MM:SS'/>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-success'> Save </button>
                </div>
            </form>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default FormNP
