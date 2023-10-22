import { useState } from 'react'

// import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Direktur from './components/pages/Direktur'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
  <Routes>
    <Route path='/' element={<Direktur />} />
  </Routes>
  )
}

export default App
