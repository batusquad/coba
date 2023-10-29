import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Layout from '../page/Layout'

const Formnpv = () => {
    const [namadirektur, setNamadirektur] = useState("");
  const [lampiran, setLampiran] = useState("");
  const [nomor, setNomor] = useState("");
  const navigate = useNavigate();

        const saveUser = async (e) => {
            e.preventDefault();
            try {
                await axios.post('http://localhost:5014/users',{
                    namadirektur,
                    lampiran,
                    nomor
                });
                navigate("/npv")
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
                        <input id='lampiran' type="text" placeholder="..." value={lampiran} onChange={(e => setLampiran(e.target.value))}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nomor</label>
                    <div className="control">
                        <input id='nomor' type="text" placeholder="..." value={nomor} onChange={(e => setNomor(e.target.value))}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nama Direktur</label>
                    <div className="control">
                        <input type="text" id='namadirektur' placeholder="Nama"  value={namadirektur} onChange={(e => setNamadirektur(e.target.value))} />
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

export default Formnpv
