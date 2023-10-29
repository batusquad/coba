import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Layout from '../page/Layout'

const FormSPB = () => {
    const [uraian, setUraian] = useState("")
    const [vol, setVol] = useState("")
    const [satuan, setSatuan] = useState("")
    const [hargasatuan, setHargasatuan] = useState("")
    const [jumlah, setJumlah] = useState("")
    const navigate = useNavigate();

    const saveSPB = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5014/spb',{
                uraian,
                vol,
                satuan,
                hargasatuan,
                jumlah
            });
            navigate("/SPB")
        } catch (error){
            console.log(error);
        }
    }


  return (
    <Layout>
    <div>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveSPB}>
                <div className="field">
                    <label className="label">Uraian</label>
                    <div className="control">
                        <input type="text" className="input" value={uraian} onChange={(e => setUraian(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Vol</label>
                    <div className="control">
                        <input type="text" className="input" value={vol} onChange={(e => setVol(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Satuan</label>
                    <div className="control">
                        <input type="text" className="input" value={satuan} onChange={(e => setSatuan(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Harga Satuan</label>
                    <div className="control">
                        <input type="text" className="input" value={hargasatuan} onChange={(e => setHargasatuan(e.target.value))} placeholder='...'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Jumlah</label>
                    <div className="control">
                        <input type="text" className="input" value={jumlah} onChange={(e => setJumlah(e.target.value))} placeholder='...'/>
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

export default FormSPB
