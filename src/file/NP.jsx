import React, {useState, useEffect} from 'react';
import axios from "axios"
import "../style/Card.css"
import Layout from '../page/Layout';
import { useNavigate } from 'react-router-dom';

const NP = () => {

  
  const [users,setUser] = useState([]);

  useEffect(() =>{
      getUsers();
  },[]);
  const getUsers = async () =>{
      const response = await axios.get('http://localhost:5014/users');
      setUser(response.data)
  }
  
  return (
    <Layout>
    <div>
      <div id="content">
        {users.map((user,index)=> (
        <div className="np-head" >
          <p>
            Lampiran I : {user.lampiran}
          </p>
          <p>
            Nomor : {user.nomor}
          </p>
            <p key={user.id}>
              Tanggal : {user.tanggal}
            </p>
        </div>
        ))}
        <div className="np-title">
          <strong>NARASUMBER/PEMBICARA</strong>
          <br />
        {users.map((user,index)=> (
           <p key={user.id + "namakegiatan"}>{user.namakegiatan}</p>
          ))}
          <br />
        {users.map((user,index)=> (
           <p key={user.id + "tanggalkegiatan"}>{user.tanggalkegiatan}</p>
        ))} 
          </div>
        <div className="np-main">
          <table className="table" width="10%">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>Besar Honorarium</th>
                <th>Pajak</th>
                <th>Transport</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
            {users.map((user,index)=> (
                        <tr key={user.id}>
                        <td>{index+1}</td>
                        <td>{user.nama}</td>
                        <td>{user.jabatan}</td>
                        <td>{user.honorarium}</td>
                        <td>{user.pajak}</td>
                        <td>{user.transport}</td>
                        <td>{user.keterangan}</td>
                    </tr>
                    ))}
            </tbody>
          </table>
        </div>
        <div className="np-foot">
          <p>Direktur, </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {users.map((user,index)=> (
            <p>{user.namadirektur}</p>
          ))}
        </div>
      </div>
      <button  type='submit'  id="btn-one" className="submit btn btn-success btn-lg">
        submit
      </button>
    </div>
    </Layout>
  );
};

export default NP;
