import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser, reset } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import "../style/Login.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
      const dispatch = useDispatch();
    const navigate = useNavigate();
      const {user, isError, isSuccess, isLoading, message} = useSelector(
        (state) => state.auth 
        );

        useEffect(() => {
          if(user || isSuccess) {
            navigate("/dashboard")
          }
          dispatch(reset());
        }, [user, isSuccess, dispatch, navigate]);

        const Auth = (e) => {
          e.preventDefault();
          dispatch(LoginUser({email, password}))
        }

  return (
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={Auth}>
                  <div className="justify-content-center justify-content-lg-start">
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      {isError && <p className='has-text-centered'>{message}</p>}
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control form-control-lg"
                        placeholder="Enter a valid email address"
                      />
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                      />
                    </div>

                    
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                      >
                        {isLoading ? "Loading..." : "Login"}
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account? <a role='button' onClick={() => navigate("/register")} className="link-danger">Register</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Login;
