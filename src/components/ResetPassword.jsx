import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/ResetPassword.css"

function ResetPassword({ email }) {
  const navigate = useNavigate();  
  const [otp, setOTP] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const resetPassword = () => {
    // Konfirmasi OTP dan mengganti kata sandi
  };

  return (
    <section className="container r"> 
        <div className="col-xl-4 offset-xl-4">
            <form>
                <div className="justify-content-center">
                    <div className="card border-0 shadow-lg my-5">
                        <div className="text-center"> 
                        <br />
                            <div className="p-2">
                                <h2 className="h2 fw-bold">Reset Password</h2>
                                <p className="mb-4">Please enter the OTP code that we have sent, then enter the new password</p>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="text-center form-outline flex-fill mb-0">
                                    <input type="text" id="form3Example4" className="text-center form-control" placeholder="Enter OTP..." />
                                </div>
                            </div>
                            <div className="align-items-center">
                                <div className="text-center form-outline flex-fill mb-2">
                                    <input type="password" id="form3Example4" className=" text-center form-control" placeholder="Enter New Password..." />
                                </div>
                            </div>
                            <br />
                            <div className="text-center">
                                <a onClick={() => navigate("/Login")}>
                                <button type="button" className="btn btn-primary btn-lg">Reset Password</button>
                                </a>
                            </div>
                        </div>
                         <br />
                    </div>
                </div>
            </form>
        </div>
    </section>
  );
}

export default ResetPassword;
