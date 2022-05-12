import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Facturas from './routes/Facturas'
import Factura from './routes/Factura'
import Remitos from './routes/Remitos'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="/facturas" element={<Facturas />}>
            <Route path=':id' element={<Factura />} />
          </Route>
          <Route path="/remitos" element={<Remitos />} />
          <Route path="*" element={<p>404 not found</p>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
