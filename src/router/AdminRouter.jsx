import { Routes, Route, Navigate } from 'react-router-dom'
import { AdminClientsView, AdminEmployeesView, AdminInventoryView } from '../views/AdminViews'
import { LateralNavbarAdmin } from '../components/Ui/LateralNavbarAdmin'
import '../views/AdminViews/Admin.css'
import { AdminProvider } from '../context/AdminContext/AdminProvider'

export const AdminRouter = () => {
  return (
    <AdminProvider>
      <Routes>
          <Route path='/admin' element={<LateralNavbarAdmin/>}>
            <Route path='/admin/' element={<Navigate to="/admin/clients"/>}/>
            <Route path="clients" element={<AdminClientsView />} />
            <Route path="employees" element={<AdminEmployeesView />} />
            <Route path="inventory" element={<AdminInventoryView />} />
          </Route>
      </Routes>
    </AdminProvider>
  )
}
