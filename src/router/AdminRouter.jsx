import { Routes, Route } from 'react-router-dom';
import { AdminClientsView, AdminEmployeesView, AdminInventoryView } from '../views/AdminViews';
import { LateralNavbar } from '../components/Ui/LateralNavbar';
import '../views/AdminViews/Admin.css'

export const AdminRouter = () => {
  return (
    <>
      <LateralNavbar/>
        <Routes>
          <Route path='/admin'>
            <Route path="clients" element={<AdminClientsView />} />
            <Route path="employees" element={<AdminEmployeesView />} />
            <Route path="inventory" element={<AdminInventoryView />} />
          </Route>
        </Routes>
    </>
  )
}
