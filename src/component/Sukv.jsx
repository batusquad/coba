import React, {useState, useEffect} from 'react'
import "../style/Np.css"
import { useNavigate } from 'react-router-dom';
import Layout from '../page/Layout';
import axios from 'axios';

const Sukv = () => {
  const [users,setUser] = useState([]);

  useEffect(() =>{
      getUsers();
  },[]);
  const getUsers = async () =>{
      const response = await axios.get('http://localhost:5014/users/');
      setUser(response.data)
  }
  const navigate = useNavigate();

  return (
    <Layout>
    <div className="containers">
      <h1 className="title">Acc Request Nota Pembicara</h1>
      <table >
        <thead>
          <tr>
            <th>Tanggal Request</th>
            <th>Nama Lengkap</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {users && users.map((user,index)=> (
                        <tr key={user.id}>
                        <td>{user.tanggal}</td>
                        <td>{user.nama}</td>          
                        <td><button onClick={() => navigate("/SUK")} className="btn btn-primary verif">DOC</button></td>
                    </tr>
                    ))}
        </tbody>
      </table>
      <div className="text-center mt-3">
        <button onClick={() => navigate("/verifikator")} className="btn btn-primary ">Submit</button>
      </div>
    </div>
    </Layout>
  );
;}

export default Sukv
