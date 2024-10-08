import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from '../src/context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <BrowserRouter>
  <AuthProvider>
  <App/>
  </AuthProvider>
  </BrowserRouter>
)
