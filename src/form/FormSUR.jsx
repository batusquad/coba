import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Layout from '../page/Layout'

const FormSUR = () => {
    const [nomor, setNomor] = useState("")
    const [sifat, setSifat] = useState("")
    const [hal, setHal] = useState("")
    const [lampiran, setLampiran] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [divisi, setDivisi] = useState("")
    const [program, setProgram] = useState("")
    const [melaksanakan, setMelaksanakan] = useState("")
    const [hari, setHari] = useState("")
    const [tanggalkegiatan, setTanggalkegiatan] = useState("")
    const [waktu, setWaktu] = useState("")
    const [tempat, setTempat] = useState("")
    const [acara, setAcara] = useState("")
    const [atasan, setAtasan] = useState("")
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5014/sur',{
                tanggal,
                nomor,
                sifat,
                hal,
                lampiran,
                program,
                divisi,
                melaksanakan,
                hari,
                tanggalkegiatan,
                waktu,
                tempat,
                acara,
                atasan
            });
            navigate("/SUR")
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
                    <label className="label">Tanggal</label>
                    <div className="control">
                        <input type="text" className="input" value={tanggal} onChange={(e => setTanggal(e.target.value))} placeholder='nama'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nomor</label>
                    <div className="control">
                        <input type="text" className="input" value={nomor} onChange={(e => setNomor(e.target.value))} placeholder='nama'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Sifat</label>
                    <div className="control">
                        <input type="text" className="input" value={sifat} onChange={(e => setSifat(e.target.value))} placeholder='name'/>
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
                    <label className="label">Program</label>
                    <div className="control">
                        <input type="text" className="input" value={program} onChange={(e => setProgram(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Divisi</label>
                    <div className="control">
                        <input type="text" className="input" value={divisi} onChange={(e => setDivisi(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Melakaksanakan apa</label>
                    <div className="control">
                        <input type="text" className="input" value={melaksanakan} onChange={(e => setMelaksanakan(e.target.value))} placeholder='name'/>
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
                    <label className="label">Waktu</label>
                    <div className="control">
                        <input type="text" className="input" value={waktu} onChange={(e => setWaktu(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tempat</label>
                    <div className="control">
                        <input type="text" className="input" value={tempat} onChange={(e => setTempat(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Acara</label>
                    <div className="control">
                        <input type="text" className="input" value={acara} onChange={(e => setAcara(e.target.value))} placeholder='name'/>
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

export default FormSUR
