import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Np from './isi/Np';
import Sprr from './isi/Sprr';
import Spb from './isi/Spb';
import Sur from './isi/Sur';
import Suk from './isi/Suk';
import Spd from './isi/Spd';

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Np" element={<Np />} />
      <Route path="/Sprr" element={<Sprr />} />
      <Route path="/Spb" element={<Spb />} />
      <Route path="/Sur" element={<Sur />} />
      <Route path="/Suk" element={<Suk />} />
      <Route path="/Spd" element={<Spd />} />
    </Routes>
  );
}

export default App;