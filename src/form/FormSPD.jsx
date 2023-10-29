import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Layout from '../page/Layout'

const FormSPD = () => {
    const [dokumen, setDokumen] = useState("")
    const [namapegawai, setNamapegawai] = useState("")
    const [jabatan, setJabatan] = useState("")
    const [maksudperjalanandinas, setMaksudperjalanandinas] = useState("")
    const [angkutan, setAngkutan] = useState("")
    const [tempatberangkat, setTempatberangkat] = useState("")
    const [tujuan, setTujuan] = useState("")
    const [estimasiwaktu, setEstimasiwaktu] = useState("")
    const [tanggalberangkat, setTanggalberangkat] = useState("")
    const [tanggalharuskembali, setTanggalharuskembali] = useState("")
    const [namaanggota, setNamaanggota] = useState("")
    const [namaanggota1, setNamaanggota1] = useState("")
    const [tanggallahir, setTanggallahir] = useState("")
    const [tanggallahir1, setTanggallahir1] = useState("")
    const [keterangan, setKeterangan] = useState("")
    const [keterangan1, setKeterangan1] = useState("")
    const [divisi, setDivisi] = useState("")
    const [nomordivisi, setNomordivisi] = useState("")
    const [ketlainlain, setKetlainlain] = useState("")
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5014/spd',{
                dokumen,
                namapegawai,
                maksudperjalanandinas,
                jabatan,
                angkutan,
                tempatberangkat,
                tujuan,
                estimasiwaktu,
                tanggalberangkat,
                tanggalharuskembali,
                namaanggota,
                namaanggota1,
                tanggallahir,
                tanggallahir1,
                keterangan,
                keterangan1,
                divisi,
                nomordivisi,
                ketlainlain
            });
            console.log("SPD data saved successfully.");
            navigate("/SPD")
        } catch (error){
            console.log("Error while saving SPD data:",error);
        }
    }


  return (
    <Layout>
    <div>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className="field">
                    <label className="label">Dokumen</label>
                    <div className="control">
                        <input type="text" className="input" value={dokumen} onChange={(e => setDokumen(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nama Pegawai</label>
                    <div className="control">
                        <input type="text" className="input" value={namapegawai} onChange={(e => setNamapegawai(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Jabatan</label>
                    <div className="control">
                        <input type="text" className="input" value={jabatan} onChange={(e => setJabatan(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Maksud Perjalanan Dinas</label>
                    <div className="control">
                        <input type="text" className="input" value={maksudperjalanandinas} onChange={(e => setMaksudperjalanandinas(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Angkutan</label>
                    <div className="control">
                        <input type="text" className="input" value={angkutan} onChange={(e => setAngkutan(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tempat Berangkat</label>
                    <div className="control">
                        <input type="text" className="input" value={tempatberangkat} onChange={(e => setTempatberangkat(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tempat Tujuan</label>
                    <div className="control">
                        <input type="text" className="input" value={tujuan} onChange={(e => setTujuan(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Lama Perjalanan Dinas</label>
                    <div className="control">
                        <input type="text" className="input" value={estimasiwaktu} onChange={(e => setEstimasiwaktu(e.target.value))} placeholder='HH:MM:SS'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tanggal Berangkat</label>
                    <div className="control">
                        <input type="text" className="input" value={tanggalberangkat} onChange={(e => setTanggalberangkat(e.target.value))} placeholder='YYYY-MM-DD'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tanggal Harus Kembali/Tiba di Tempat Baru</label>
                    <div className="control">
                        <input type="text" className="input" value={tanggalharuskembali} onChange={(e => setTanggalharuskembali(e.target.value))} placeholder='YYYY-MM-DD'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nama Anggota</label>
                    <div className="control">
                        <input type="text" className="input" value={namaanggota} onChange={(e => setNamaanggota(e.target.value))} placeholder='name'/>
                        <input type="text" className="input" value={namaanggota1} onChange={(e => setNamaanggota1(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tanggal Lahir</label>
                    <div className="control">
                        <input type="text" className="input" value={tanggallahir} onChange={(e => setTanggallahir(e.target.value))} placeholder='YYYY-MM-DD'/>
                        <input type="text" className="input" value={tanggallahir} onChange={(e => setTanggallahir1(e.target.value))} placeholder='YYYY-MMDD'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Keterangan</label>
                    <div className="control">
                        <input type="text" className="input" value={keterangan} onChange={(e => setKeterangan(e.target.value))} placeholder='...'/>
                        <input type="text" className="input" value={keterangan1} onChange={(e => setKeterangan1(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Divisi</label>
                    <div className="control">
                        <input type="text" className="input" value={divisi} onChange={(e => setDivisi(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nomor Divisi</label>
                    <div className="control">
                        <input type="text" className="input" value={nomordivisi} onChange={(e => setNomordivisi(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">ketlainlain</label>
                    <div className="control">
                        <input type="text" className="input" value={ketlainlain} onChange={(e => setKetlainlain(e.target.value))} placeholder='...'/>
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

export default FormSPD

