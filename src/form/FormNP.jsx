import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Layout from '../page/Layout'

const FormNP = () => {
    const [nama, setNama] = useState("")
    const [jabatan, setJabatan] = useState("")
    const [honorarium, setHonorarium] = useState("")
    const [pajak, setPajak] = useState("")
    const [transport, setTransport] = useState("")
    const [keterangan, setKeterangan] = useState("")
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5014/users',{
                nama,
                jabatan,
                honorarium,
                pajak,
                transport,
                keterangan
            });
            navigate("/NP")
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
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" className="input" value={nama} onChange={(e => setNama(e.target.value))} placeholder='nama'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Jabatan</label>
                    <div className="control">
                        <input type="text" className="input" value={jabatan} onChange={(e => setJabatan(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Honorarium</label>
                    <div className="control">
                        <input type="text" className="input" value={honorarium} onChange={(e => setHonorarium(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Pajak</label>
                    <div className="control">
                        <input type="text" className="input" value={pajak} onChange={(e => setPajak(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Transport</label>
                    <div className="control">
                        <input type="text" className="input" value={transport} onChange={(e => setTransport(e.target.value))} placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Keterangan</label>
                    <div className="control">
                        <input type="text" className="input" value={keterangan} onChange={(e => setKeterangan(e.target.value))} placeholder='name'/>
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
