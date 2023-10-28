import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Layout from '../page/Layout'

const FormSUK = () => {
    const [yth, setYth] = useState("")
    const [dari, setDari] = useState("")
    const [hal, setHal] = useState("")
    const [lampiran, setLampiran] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [divisi, setDivisi] = useState("")
    const [rangka, setRangka] = useState("")
    const [kegiatan, seKegiatan] = useState("")
    const [hari, setHari] = useState("")
    const [tanggalkegiatan, setTanggalkegiatan] = useState("")
    const [atasan, setAtasan] = useState("")
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5014/suk',{
                yth,
                dari,
                hal,
                lampiran,
                tanggal,
                divisi,
                rangka,
                kegiatan,
                hari,
                tanggalkegiatan,
                atasan
            });
            navigate("/SUK")
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
                        <input type="text" className="input" value={yth} onChange={(e => setYth(e.target.value))} placeholder='nama'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Dari</label>
                    <div className="control">
                        <input type="text" className="input" value={dari} onChange={(e => setDari(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Hal</label>
                    <div className="control">
                        <input type="text" className="input" value={hal} onChange={(e => setHal(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Lampiran</label>
                    <div className="control">
                        <input type="text" className="input" value={lampiran} onChange={(e => setLampiran(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tanggal</label>
                    <div className="control">
                        <input type="text" className="input" value={tanggal} onChange={(e => setTanggal(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Dalam rangka apa</label>
                    <div className="control">
                        <input type="text" className="input" value={rangka} onChange={(e => setRangka(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Divisi</label>
                    <div className="control">
                        <input type="text" className="input" value={divisi} onChange={(e => setDivisi(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Kegiatan</label>
                    <div className="control">
                        <input type="text" className="input" value={kegiatan} onChange={(e => seKegiatan(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Hari</label>
                    <div className="control">
                        <input type="text" className="input" value={hari} onChange={(e => setHari(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tanggal</label>
                    <div className="control">
                        <input type="text" className="input" value={tanggalkegiatan} onChange={(e => setTanggalkegiatan(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Atasan</label>
                    <div className="control">
                        <input type="text" className="input" value={atasan} onChange={(e => setAtasan(e.target.value))} placeholder='name'/>
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

export default FormSUK
