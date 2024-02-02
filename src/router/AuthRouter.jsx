import { Routes, Route } from 'react-router-dom';
import { LoginView } from '../views/AuthViews/LoginView';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path='/auth'>
        <Route path='signin' element={<LoginView />} />
      </Route>
    </Routes>
  )
}
