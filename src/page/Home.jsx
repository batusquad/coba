import React,{useEffect} from 'react'
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/app.css'
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../features/authSlice'


const Home = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError, user} = useSelector((state=> state.auth));

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
      if(isError){
        navigate("/");
      }
      if(user && user.role !== "admin"){
        navigate("/dashboard");
      }
  }, [isError, user, navigate]);

  return (
    <Layout>
    <div className="container">
      <h1 className="titleh">Acc Request Pengajuan Proposal</h1>
      <div className="row">
        <div onClick={() => navigate("/npv")} className="col-md-4">
          <div className="card custom-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgH5W0sRe4nuBuP1MIFe5ElwvWkB7s361YQ&usqp=CAU" 
              alt="Logo Surat 1"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Nota Pembicara</h5>
            </div>
          </div>
        </div>
        <div onClick={() => navigate("/sprrv")} className="col-md-4">
          <div className="card custom-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgH5W0sRe4nuBuP1MIFe5ElwvWkB7s361YQ&usqp=CAU"
              alt="Logo Surat 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Surat Peminjaman Ruang Rapat</h5>
            </div>
          </div>
        </div>
        <div onClick={() => navigate("/spbv")} className="col-md-4">
          <div className="card custom-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgH5W0sRe4nuBuP1MIFe5ElwvWkB7s361YQ&usqp=CAU"
              alt="Logo Surat 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Surat Pengajuan Biaya</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div onClick={() => navigate("/surv")} className="col-md-4">
          <div className="card custom-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgH5W0sRe4nuBuP1MIFe5ElwvWkB7s361YQ&usqp=CAU"
              alt="Logo Surat 4"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Surat Undangan Rapat</h5>
            </div>
          </div>
        </div>
        <div onClick={() => navigate("/sukv")} className="col-md-4">
          <div className="card custom-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgH5W0sRe4nuBuP1MIFe5ElwvWkB7s361YQ&usqp=CAU"
              alt="Logo Surat 5"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Surat Usulan Kegiatan</h5>
            </div>
          </div>
        </div>
        <div onClick={() => navigate("/spdv")} className="col-md-4">
          <div className="card custom-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgH5W0sRe4nuBuP1MIFe5ElwvWkB7s361YQ&usqp=CAU"
              alt="Logo Surat 6"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Surat Perjalanan Dinas</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <button onClick={() => navigate("/Lembarverif")} className="btn btn-primary">Submit</button>
      </div>
    </div>
    </Layout>
  );
}

export default Home;
