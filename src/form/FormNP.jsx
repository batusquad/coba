import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Layout from '../page/Layout'

const FormNP = () => {
    const [tanggal, setTanggal] = useState("")
    const [namakegiatan, setNamakegiatan] = useState("")
    const [tanggalkegiatan, setTanggalkegiatan] = useState("")
    const [nama, setNama] = useState("")
    const [jabatan, setJabatan] = useState("")
    const [honorarium, setHonorarium] = useState("")
    const [pajak, setPajak] = useState("")
    const [transport, setTransport] = useState("")
    const [keterangan, setKeterangan] = useState("")
    const [namadirektur, setNamadirektur] = useState("");
    const [lampiran, setLampiran] = useState("");
    const [nomor, setNomor] = useState("");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5014/users',{
                tanggal,
                namakegiatan,
                tanggalkegiatan,
                nama,
                jabatan,
                honorarium,
                pajak,
                transport,
                keterangan,
                namadirektur,
                lampiran,
                nomor
            });
            navigate("/pra-usulan")
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
                    <label className="label">Lampiran</label>
                    <div className="control">
                        <input  type="text" className='input'  placeholder="..." value={lampiran} onChange={(e => setLampiran(e.target.value))}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nomor</label>
                    <div className="control">
                        <input  type="text" className='input' placeholder="..." value={nomor} onChange={(e => setNomor(e.target.value))}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tanggal input</label>
                    <div className="control">
                        <input type="text" className="input" value={tanggal} onChange={(e => setTanggal(e.target.value))} placeholder='YYYY-MM-DD'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nama Kegiatan</label>
                    <div className="control">
                        <input type="text" className="input" value={namakegiatan} onChange={(e => setNamakegiatan(e.target.value))} placeholder='Nama Kegiatan'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tanggal Kegiatan</label>
                    <div className="control">
                        <input type="text" className="input" value={tanggalkegiatan} onChange={(e => setTanggalkegiatan(e.target.value))} placeholder='Tanggal Kegiatan'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" className="input" value={nama} onChange={(e => setNama(e.target.value))} placeholder='Nama'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Jabatan</label>
                    <div className="control">
                        <input type="text" className="input" value={jabatan} onChange={(e => setJabatan(e.target.value))} placeholder='Jabatan'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Honorarium</label>
                    <div className="control">
                        <input type="text" className="input" value={honorarium} onChange={(e => setHonorarium(e.target.value))} placeholder='Honorarium'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Pajak</label>
                    <div className="control">
                        <input type="text" className="input" value={pajak} onChange={(e => setPajak(e.target.value))} placeholder='Pajak'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Transport</label>
                    <div className="control">
                        <input type="text" className="input" value={transport} onChange={(e => setTransport(e.target.value))} placeholder='Transport'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Keterangan</label>
                    <div className="control">
                        <input type="text" className="input" value={keterangan} onChange={(e => setKeterangan(e.target.value))} placeholder='Keterangan'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nama Direktur</label>
                    <div className="control">
                        <input type="text" className='input' placeholder="Nama Direktur"  value={namadirektur} onChange={(e => setNamadirektur(e.target.value))} />
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
