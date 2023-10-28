import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name,setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confPassword, setconfPassword] = useState("")
    const [role, setRole] = useState("")
    const navigate = useNavigate();

    const saveUser = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:5014/login',{
              name,
              email,
              password,
              confPassword,
              role,
              });
              navigate("/login")
      } catch (error){
        if (error.response) {
          // Kesalahan dari respons server
          console.log("Server Error:", error.response.data);
        } else {
          // Kesalahan koneksi atau kesalahan lainnya
          console.log("Error:", error.message);
        }
      }
  }
  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100" onSubmit={saveUser}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c" >Your Name</label>
                          <input type="text" id="form3Example1c" className="form-control" value={name} onChange={(e => setName(e.target.value))}/>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          <input type="email" id="form3Example3c" className="form-control" value={email} onChange={(e => setEmail(e.target.value))}/>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                          <input type="password" id="form3Example4c" className="form-control" value={password} onChange={(e => setPassword(e.target.value))}/>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                          <input type="password"  className="form-control" value={confPassword} onChange={(e => setconfPassword(e.target.value))}/>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4cd">Role</label>
                          <input type="text " id="form3Example4cd" className="form-control" value={role} onChange={(e => setRole(e.target.value))}/>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <a >
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </a>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
