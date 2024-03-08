import { Routes, Route } from 'react-router-dom'
import { RoutineView } from '../views/RoutineViews/RoutineView'

export const RoutineRouter = () => {
  return (
    <Routes>
      <Route path='/routine/' element={<RoutineView/>}>
        <Route path='/routine/:routine_id' element={<RoutineView/>}/>
      </Route>
    </Routes>
  )
}
