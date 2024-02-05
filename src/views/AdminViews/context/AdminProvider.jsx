import { useState } from "react"
import { AdminContext } from "./AdminContext"

export const AdminProvider = ({ children }) => {

  const [selectedId, setSelectedId] = useState({
    'client_id': undefined,
    'employee_id': undefined,
    'item_id': undefined,
  })

  return (
    <AdminContext.Provider value={{selectedId, setSelectedId}}>
      {children}
    </AdminContext.Provider>
  )
}
