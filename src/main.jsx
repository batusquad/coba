import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Layout from './page/Layout.jsx';

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Provider store = {store}>
    <App />
    </Provider>
    
    </BrowserRouter>
  </React.StrictMode>,
)
