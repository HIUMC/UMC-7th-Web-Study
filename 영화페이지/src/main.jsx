import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Navbar/Navbar.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
