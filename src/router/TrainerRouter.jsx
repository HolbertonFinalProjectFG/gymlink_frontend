import { Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { TrainerRoutinesView, TrainerClientsView } from '../views/TrainerViews'
import { LateralNavbarTrainer } from '../components/Ui/LateralNavbarTrainer'
import { TrainerProvider, TrainerClientProvider } from '../context/TrainerContext/'
import { trainerStore } from '../store/TrainerStore/trainerStore'

export const TrainerRouter = () => {
  return (
    <TrainerProvider>
        <Routes>
            <Route path='/trainer/' element={<LateralNavbarTrainer/>}>
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
                  <Provider store={trainerStore}>
                    <TrainerRoutinesView />
                  </Provider>
                }
              />
              
            </Route>
        </Routes>
    </TrainerProvider>
  )
}
