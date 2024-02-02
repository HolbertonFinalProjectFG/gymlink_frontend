import { Routes, Route } from 'react-router-dom';
import { AdminClientsView, AdminEmployeesView, AdminInventoryView } from '../views/AdminViews';

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path='/admin'>
        <Route path="clients" element={<AdminClientsView />} />
        <Route path="employees" element={<AdminEmployeesView />} />
        <Route path="inventory" element={<AdminInventoryView />} />
      </Route>
    </Routes>
  )
}
