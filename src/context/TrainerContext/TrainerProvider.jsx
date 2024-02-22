import { useState } from 'react'
import { TrainerContext } from './TrainerContext'

export const TrainerProvider = ({ children }) => {

  const [selectedUser, setSelectedUser] = useState(undefined)

  return (
    <TrainerContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </TrainerContext.Provider>
  )
}
