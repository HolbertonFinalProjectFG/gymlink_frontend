import { Routes, Route, Navigate } from 'react-router-dom'
import { TrainerRoutinesView, TrainerClientsView } from '../views/TrainerViews'
// import { LateralNavbarTrainer } from '../components/Ui/LateralNavbarTrainer'

export const TrainerRouter = () => {
  return (
    <Routes>
        <Route path='/trainer'>
          <Route path='/trainer/' element={<Navigate to="/trainer/clients"/>}/>
          <Route path="clients" element={<TrainerClientsView/>} />
          <Route path="routines" element={<TrainerRoutinesView />} />
        </Route>
    </Routes>
  )
}
