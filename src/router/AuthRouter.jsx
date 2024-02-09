import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginView } from '../views/AuthViews/LoginView';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/auth/signin'/>} />
      <Route path='auth'>
        <Route path='/auth/signin' element={<LoginView />} />
      </Route>
    </Routes>
  )
}
