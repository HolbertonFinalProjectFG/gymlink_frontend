import { Routes, Route, Navigate } from 'react-router-dom'
import { TrainerRoutinesView, TrainerClientsView } from '../views/TrainerViews'
import { LateralNavbarTrainer } from '../components/Ui/LateralNavbarTrainer'
import { TrainerProvider, TrainerRoutinesProvider, TrainerClientProvider } from '../context/TrainerContext/'

export const TrainerRouter = () => {
  return (
    <TrainerProvider>
        <Routes>
            <Route path='/trainer' element={<LateralNavbarTrainer/>}>
              <Route path='/trainer/' element={<Navigate to="/trainer/clients"/>}/>
              <Route
                path="clients"
                element={
                  <TrainerClientProvider>
                    <TrainerClientsView/>
                  </TrainerClientProvider>
                }
              />
              
              <Route
                path="routines"
                element={
                  <TrainerRoutinesProvider>
                    <TrainerRoutinesView />
                  </TrainerRoutinesProvider>
                }
              />
              
            </Route>
        </Routes>
    </TrainerProvider>
  )
}
