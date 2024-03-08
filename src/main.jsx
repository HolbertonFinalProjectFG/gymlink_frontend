import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {
  AdminRouter,
  AuthRouter,
  TrainerRouter,
  RoutineRouter
} from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminRouter />
      <AuthRouter />
      <TrainerRouter />
      <RoutineRouter/>
    </BrowserRouter>
  </React.StrictMode>
)
