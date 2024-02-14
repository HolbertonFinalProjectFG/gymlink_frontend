import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AdminRouter } from './router/AdminRouter.jsx'
import { AuthRouter } from './router/AuthRouter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminRouter />
      <AuthRouter />
    </BrowserRouter>
  </React.StrictMode>
)
