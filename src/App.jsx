import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Ganti dengan komponen yang sesuai
import Register from './components/Register'; // Ganti dengan komponen yang sesuai
import ForgotPassword from './components/ForgotPassword'; // Ganti dengan komponen yang sesuai
import ResetPassword from './components/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          <Route path="/ResetPassword" element={<ResetPassword/>} />
    </Routes>
  );
}

export default App;
