import React from 'react';
import "../style/ForgotPassword.css"
import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                      <p className="mb-4">Enter your email address below and we'll send you a link to reset your password!</p>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                        <br />
                      </div>
                      <div className="text-center">
                        <a role='button' onClick={() => navigate("/ResetPassword")} className="btn btn-primary btn-user btn-block">
                          Reset Password
                        </a>
                      </div>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" role='button' onClick={() => navigate("/Register")}>Create an Account!</a>
                    </div>
                    <div className="text-center">
                      <a className="small" role='button' onClick={() => navigate("/Login")}>Already have an account? Login!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;