import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Facturas from './routes/Facturas'
import Factura from './routes/Factura'
import Remitos from './routes/Remitos'
import './index.css'
import ProtectedRoute from './routes/auth/ProtectedRoute'
import Protected from './routes/Protected'
import SignIn from "./routes/SignIn"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="/facturas" element={<Facturas />}>
            <Route index
              element={<div style={{ padding: ".5rem" }}>
                <p>Seleccione una factura</p>
              </div>} />
            <Route path=':number' element={<Factura />} />
          </Route>
          <Route path="/remitos" element={<Remitos />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='protected' element={<Protected />} />
        </Route>
        <Route path='signin' element={<SignIn />} />

        <Route path="*" element={<p>404 not found</p>} />



      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
